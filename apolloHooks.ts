import {useMutation, MutationHookOptions} from 'react-apollo-hooks';
import {OperationVariables} from 'apollo-client';
import {DocumentNode} from 'graphql';
export declare type FetchResult<TData extends object> = Promise<TData[(keyof TData)]>;
export declare type MutationFn<TData extends object, TVariables> = (
  options?: MutationHookOptions<TData, TVariables>
) => Promise<FetchResult<TData>>;
export function useSimpleMutation<TData extends object, TVariables = OperationVariables>(
  mutation: DocumentNode,
  baseOptions?: MutationHookOptions<TData, TVariables>
): MutationFn<TData, TVariables> {
  const fn = useMutation(mutation as any, baseOptions);
  return async function(opts) {
    const res: any = await fn(opts);
    if (res && res.data) {
      const key = Object.keys(res.data)[0];
      return res.data[key];
    } else {
      console.error('useSimpleMutation error', res);
      return {};
    }
  };
}
