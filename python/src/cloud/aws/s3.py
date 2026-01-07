import pulumi_aws as aws


def create_s3_bucket(bucket_name: str, force_destroy: bool = False) -> aws.s3.Bucket:
    """Creates an S3 bucket with the given name."""
    bucket = aws.s3.Bucket(
        bucket_name,
        bucket=bucket_name,
        force_destroy=force_destroy,
    )
    return bucket
