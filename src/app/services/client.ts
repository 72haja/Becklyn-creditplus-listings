import { cacheExchange, ClientOptions, createClient, fetchExchange } from 'urql';

const spaceId = process.env.NEXT_PUBLIC_SPACE_ID;
const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const clientOptions: ClientOptions = {
  url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`,
  fetchOptions: () => {
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };
  },
  exchanges: [cacheExchange, fetchExchange],
}
const client = createClient(clientOptions);

export default client;