from src.cloud.aws.ec2 import create_ec2_instance
from src.deployment.service import Service

import pulumi


class LoginService(Service):
    def __init__(self, config: pulumi.Config):
        super().__init__(config)

    def deploy(self):
        # Deployment logic for Login Service. Just an example.
        ec2_instance = create_ec2_instance(f"{self.service_name}-instance")
        pulumi.export("login_service_instance_id", ec2_instance.id)
    