/** @type {import('next').NextConfig} */
import { generateSchema } from '@gql.tada/cli-utils';

const nextConfig = {};

console.log("startup")

const accessToken = 'eOFVBhodhL0U9ekDRaV-HyQECiBhJBIdQ6SWYio6_HU';

await generateSchema({
  input: 'https://graphql.contentful.com/content/v1/spaces/bt6alqgdjs1c/environments/master',
  output: './schema.graphql',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  tsconfig: undefined,
});

export default nextConfig;
