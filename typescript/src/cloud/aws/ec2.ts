import * as aws from "@pulumi/aws";


export async function createEC2Instance(instanceName: string, instanceType: string, amiId: string): Promise<aws.ec2.Instance> {
    const instance = new aws.ec2.Instance(instanceName, {
        instanceType: instanceType,
        ami: amiId,
        tags: {
            Name: instanceName,
        },
    });

    return instance;
}