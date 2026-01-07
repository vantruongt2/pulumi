import * as aws from "@pulumi/aws";

export async function createS3Bucket(bucketName: string, forceDestroy: boolean = false): Promise<aws.s3.Bucket> {
    const bucket = new aws.s3.Bucket(bucketName, {
        bucket: bucketName,
        forceDestroy
    });

    return bucket;
}