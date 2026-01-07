# TypeScript Pulumi Project
This project demonstrates how to use Pulumi with TypeScript to manage cloud infrastructure. It includes examples of creating services, deploying resources, and organizing code for maintainability.

Once again, it automatically adds tags to all resources using the `autotag` module to help manage and track cloud resources effectively for billing and organization purposes.

## Project Structure
- `index.ts`: The main entry point for the Pulumi program. It initializes the configuration and triggers the deployment of the specified service.
- `src/`: Contains the source code for the project.
  - `deployment/`: Contains deployment logic for various services.
    - `service.ts`: Base class for all services.
    - `factory.ts`: Factory pattern implementation to manage service deployments.
    - `order-service.ts`: Deployment logic for the Order Service.
    - `login-service.ts`: Deployment logic for the Login Service.
  - `cloud/`: Contains cloud provider-specific modules.
    - `aws/`: AWS-specific cloud resource management modules.

## Getting Started
1. Install Pulumi and the required TypeScript packages.
2. Configure your Pulumi stack with the desired service name.
3. Run `pulumi up` to deploy the specified service.
