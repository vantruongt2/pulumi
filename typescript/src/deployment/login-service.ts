import { Input } from "@pulumi/pulumi";
import { createS3Bucket } from "../cloud/aws/s3";
import { Service } from "./service";

export class LoginService extends Service {
    async deploy(): Promise<{ [key: string]: Input<string>; }> {
        const s3Bucket = await createS3Bucket("login-service-bucket", true);
        return {
            s3BucketName: s3Bucket.bucket
        }
    }
}