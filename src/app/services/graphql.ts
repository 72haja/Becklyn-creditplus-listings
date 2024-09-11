import { initGraphQLTada } from 'gql.tada';
import type { introspection } from '../types/graphql/graphql-env.d';

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    DateTime: string;
    JSON: Record<string, unknown>;
  };
}>();

export { readFragment } from 'gql.tada';
export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
