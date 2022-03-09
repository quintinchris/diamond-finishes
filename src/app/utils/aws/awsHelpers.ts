import AWS from "aws-sdk";
const bucket = process.env.REACT_APP_S3_BUCKET_NAME ?? "";

AWS.config.update({
  region: process.env.REACT_APP_S3_BUCKET_REGION,
  credentials: new AWS.Credentials({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY ?? "",
  }),
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: bucket },
});

//TODO: replace console.logs
export const createAlbum = (albumName: string) => {
  albumName = albumName.trim();
  if (!albumName) {
    return console.log("Album names must contain at least one non-space character.");
  }
  if (albumName.indexOf("/") !== -1) {
    return console.log("Album names cannot contain slashes.");
  }
  const albumKey = encodeURIComponent(albumName);
  s3.headObject({ Bucket: bucket, Key: albumKey }, (err, data) => {
    if (!err) {
      return console.log("Album already exists.");
    }
    if (err.code !== "NotFound") {
      return console.log("There was an error creating your album: " + err.message);
    }
    s3.putObject({ Bucket: bucket, Key: albumKey }, (err, data) => {
      if (err) {
        return console.log("There was an error creating your album: " + err.message);
      }
    });
  });
};

export const getImagesFromAlbum = (albumName: string) => {
  const albumPhotosKey = encodeURIComponent(albumName) + "/";
  s3.listObjects(
    { Bucket: bucket, Prefix: albumPhotosKey },
    function (err, data) {
      if (err) {
        return console.log("There was an error viewing your album: " + err.message);
      }
      // 'this' references the AWS.Response instance that represents the response
      // @ts-ignore
      const href = this.request.httpRequest.endpoint.href;
      const bucketUrl = href + bucket + "/";

      const photos = data?.Contents?.map((photo) => {
        const photoKey = photo.Key;
        if (photoKey) {
          return bucketUrl + encodeURIComponent(photoKey);
        }
        return null;
      });
      return photos;
    }
  );
};

export const addImages = (albumName: string, files: any) => {
  createAlbum(albumName);
  if (!files.length) {
    return console.log("Please choose a file to upload first.");
  }
  const file = files[0];
  const fileName = file.name;
  const albumPhotosKey = encodeURIComponent(albumName) + "/";

  const photoKey = albumPhotosKey + fileName;

  // Use S3 ManagedUpload class as it supports multipart uploads
  return new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucket,
      Key: photoKey,
      Body: file,
    },
  })
    .promise()
    .then(
      function (data) {
        console.log("Successfully uploaded photo.");
        getImagesFromAlbum(albumName);
      },
      function (err) {
        return err.message;
      }
    );
};
