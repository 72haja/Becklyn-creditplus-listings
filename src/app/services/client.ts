import { cacheExchange, ClientOptions, createClient, fetchExchange } from 'urql';

const spaceId = 'bt6alqgdjs1c';
const environment = 'master';
const accessToken = 'eOFVBhodhL0U9ekDRaV-HyQECiBhJBIdQ6SWYio6_HU';

const clientOptions: ClientOptions = {
  url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`,
  fetchOptions: () => {
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  },
  exchanges: [cacheExchange, fetchExchange],
}
const client = createClient(clientOptions);

export default client;