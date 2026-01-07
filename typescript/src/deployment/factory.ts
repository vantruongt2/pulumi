import { Config } from "@pulumi/pulumi";
import { LoginService } from "./login-service";
import { OrderService } from "./order-service";
import { Service } from "./service";

const registeredServices: {
  [name: string]: { new(config: Config): Service };
} = {
  "login-service": LoginService,
  "order-service": OrderService,
};

export function createService(name: string, config: Config): Service {
  const serviceConstructor = registeredServices[name];
  if (!serviceConstructor) {
    throw new Error(`No service registered for stack ${name}`);
  }
  return new serviceConstructor(config);
}
