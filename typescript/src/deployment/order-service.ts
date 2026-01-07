import { Input } from "@pulumi/pulumi";
import { createEC2Instance } from "../cloud/aws/ec2";
import { Service } from "./service";

export class OrderService extends Service {
    async deploy(): Promise<{ [key: string]: Input<string>; }> {
        const ec2Instance = await createEC2Instance("order-service-instance", "t2.micro", "ami-0c55b159cbfafe1f0");
        return {
            ec2InstanceId: ec2Instance.id
        };
    }
}