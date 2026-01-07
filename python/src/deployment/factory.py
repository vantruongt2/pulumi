from typing import Dict, Type

from src.deployment.login_service import LoginService
from src.deployment.order_service import OrderService
from src.deployment.service import Service


services: Dict[str, Type[Service]] = {
    "order_service": OrderService,
    "login_service": LoginService,
    # Add other services here as they are implemented
}
