/** @type {import('next').NextConfig} */
import { generateSchema } from '@gql.tada/cli-utils';

const nextConfig = {};

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

await generateSchema({
  input: 'https://graphql.contentful.com/content/v1/spaces/bt6alqgdjs1c/environments/master',
  output: './schema.graphql',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  tsconfig: undefined,
  env: {
    ACCESS_TOKEN: accessToken,
    SPACE_ID: process.env.SPACE_ID,
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
});

export default nextConfig;
