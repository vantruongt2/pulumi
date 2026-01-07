"""A Python Pulumi program"""

import pulumi

from src.autotag import register_auto_tags
from src.deployment.factory import services
# Load configuration
config = pulumi.Config()
service_name = config.require("serviceName")

register_auto_tags(
    {
        "Environment": config.require("environmentName"),
        "Service": service_name,
    }
)


# Initialize and deploy the service
if service_name not in services:
    raise ValueError(
        f"Service '{service_name}' is not recognized. Available services: {list(services.keys())}"
    )

# Get the service class from the factory
service_class = services.get(service_name)
service = service_class(config)

# Deploy the service
service.deploy()