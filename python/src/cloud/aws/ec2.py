import pulumi_aws as aws


def create_ec2_instance(
    instance_name: str, instance_type: str, ami_id: str
) -> aws.ec2.Instance:
    """Creates an EC2 instance with the given parameters."""
    instance = aws.ec2.Instance(
        instance_name,
        instance_type=instance_type,
        ami=ami_id,
    )
    return instance
