from abc import ABC, abstractmethod
import pulumi


class Service(ABC):

    def __init__(self, config: pulumi.Config):
        self.config = config
        self.environment_name = config.require("environmentName")
        self.service_name = config.require("serviceName")

    @abstractmethod
    def deploy(self):
        pass
