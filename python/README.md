# Python Pulumi Project
This directory contains a Pulumi project implemented in Python. It is designed to manage cloud infrastructure using Pulumi's infrastructure as code (IaC) capabilities.
It automatically adds tags to all resources using the `autotag` module. It will help you manage and track your cloud resources effectively for billing and organization purposes.

## Project Structure
- `__main__.py`: The main entry point for the Pulumi program. It initializes the configuration and triggers the deployment of the specified service.
- `src/`: Contains the source code for the project.
  - `deployment/`: Contains deployment logic for various services.
    - `service.py`: Base class for all services.
    - `factory.py`: Factory pattern implementation to manage service deployments.
    - `order_service.py`: Deployment logic for the Order Service.
    - `login_service.py`: Deployment logic for the Login Service.
  - `cloud/`: Contains cloud provider-specific modules.
    - `aws/`: AWS-specific cloud resource management modules.

## Getting Started
1. Install Pulumi and the required Python packages.
2. Configure your Pulumi stack with the desired service name.
3. Run `pulumi up` to deploy the specified service.