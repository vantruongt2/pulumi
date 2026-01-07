from src.cloud.aws.s3 import create_s3_bucket
from src.deployment.service import Service

import pulumi


class OrderService(Service):
    def __init__(self, config: pulumi.Config):
        super().__init__(config)

    def deploy(self):
        # Deployment logic for Order Service. Just an example.
        bucket = create_s3_bucket(f"{self.service_name}-bucket", force_destroy=True)
        pulumi.export("order_service_bucket", bucket._name)
