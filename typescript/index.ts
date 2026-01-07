import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import { registerAutoTags } from "./src/autotag";
import { createService } from "./src/deployment/factory";

const config = new pulumi.Config();
const serviceName = config.require("serviceName")
const environmentName = config.require("environmentName");


export = async () => {
    await pulumi.log.info(
        `Hello, Pulumi! You are deploying the service: ${serviceName}`,
    );
    const caller = await aws.getCallerIdentity();

    registerAutoTags({
        Creator: caller.arn,
        PulumiStack: pulumi.getStack(),
        Environment: environmentName,
        Service: serviceName,
    });

    const service = createService(serviceName, config);
    const exports = await service.deploy();
    return exports;
};
