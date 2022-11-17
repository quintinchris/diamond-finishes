import * as cdk from "aws-cdk-lib";
import { DiamondFinishesS3Pipeline } from "./pipeline";

const app = new cdk.App();
new DiamondFinishesS3Pipeline(app, "diamond-finishes-pipeline-test");