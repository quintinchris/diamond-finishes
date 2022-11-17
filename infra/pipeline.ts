import * as codepipeline from "aws-cdk-lib/aws-codepipeline";
import * as codepipeline_actions from "aws-cdk-lib/aws-codepipeline-actions";
import { aws_s3, aws_codebuild } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { Stack, StackProps, RemovalPolicy, SecretValue } from "aws-cdk-lib";
import { Construct } from "constructs";

const s3 = aws_s3;
const codebuild = aws_codebuild;

export class DiamondFinishesS3Pipeline extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Source from GitHub
    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new codepipeline_actions.GitHubSourceAction({
      actionName: "Source",
      owner: "quintinchris",
      repo: "diamond-finishes",
      oauthToken: SecretValue.secretsManager("my-github-token"),
      output: sourceOutput,
      branch: "main",
      trigger: codepipeline_actions.GitHubTrigger.WEBHOOK,
    });

    // Run Codebuild
    const project = new codebuild.PipelineProject(
      this,
      "diamondFinishesCodebuildProject-test",
      {
        projectName: "DiamondFinishes",
        buildSpec: codebuild.BuildSpec.fromSourceFilename("./buildspec.yml"),
      }
    );
    const buildArtifact = new codepipeline.Artifact();
    const buildAction = new codepipeline_actions.CodeBuildAction({
      actionName: "Build",
      project,
      input: sourceOutput,
      outputs: [buildArtifact],
      environmentVariables: {
        COMMIT_URL: {
          value: sourceAction.variables.commitUrl,
        },
      },
    });

    // Manual Approvals
    const approvalToStgAction = new codepipeline_actions.ManualApprovalAction({
      actionName: "PromoteToStg",
    });
    const approvalToPrdAction = new codepipeline_actions.ManualApprovalAction({
      actionName: "PromoteToProd",
    });

    // Create Dev and Stg Buckets
    const devBucket = new s3.Bucket(this, "diamond-finishes-dev", {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    });

    const stgBucket = new s3.Bucket(this, "diamond-finishes-stg", {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    });

    const prdBucket = new s3.Bucket(this, "diamond-finishes-prd", {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    });

    // Buckets
    // const devBucket = new s3.Bucket.fromBucketName( this,'diamond-finishes-dev', 'diamond-finishes-dev');
    // const stgBucket = new s3.Bucket.fromBucketName( this,'diamond-finishes-stg', 'diamond-finishes-stg');
    // const prdBucket = new s3.Bucket.fromBucketName(
    //   this,
    //   "diamond-finishes-prd",
    //   "diamond-finishes-prd"
    // );

    // REAL BUCKET - USE AFTER TESTING
    // const prdBucket = new s3.Bucket.fromBucketName( this,'diamond-finishes', 'diamond-finishes');

    const deployToDev = new codepipeline_actions.S3DeployAction({
      actionName: "S3Deploy",
      bucket: devBucket,
      input: buildArtifact,
    });

    const deployToStg = new codepipeline_actions.S3DeployAction({
      actionName: "S3Deploy",
      bucket: stgBucket,
      input: buildArtifact,
    });

    const deployToPrd = new codepipeline_actions.S3DeployAction({
      actionName: "S3Deploy",
      bucket: prdBucket,
      input: buildArtifact,
    });

    new codepipeline.Pipeline(this, "diamond-finishes-web-test", {
      stages: [
        {
          stageName: "Source",
          actions: [sourceAction],
        },
        {
          stageName: "Build",
          actions: [buildAction],
        },
        {
          stageName: "DevDeployment",
          actions: [deployToDev],
        },
        {
          stageName: "PromoteToStg",
          actions: [approvalToStgAction],
        },
        {
          stageName: "StgDeployment",
          actions: [deployToStg],
        },
        {
          stageName: "PromoteToProd",
          actions: [approvalToPrdAction],
        },
        {
          stageName: "ProductionDeployment",
          actions: [deployToPrd],
        },
      ],
    });

    new cdk.CfnOutput(this, "DevURL", {
      value: devBucket.bucketWebsiteUrl,
      description: "Dev URL",
    });
    new cdk.CfnOutput(this, "StgURL", {
      value: stgBucket.bucketWebsiteUrl,
      description: "Stg URL",
    });
    new cdk.CfnOutput(this, "ProdURL", {
      value: prdBucket.bucketWebsiteUrl,
      description: "Prod URL",
    });
  }
}
