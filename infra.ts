#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { InfraStack } from 'infra-stack';

const app = new cdk.App();
new InfraStack(app, 'InfraStack', {
    stackName : "File-Storage-App"
});
