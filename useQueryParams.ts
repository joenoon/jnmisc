import { useRouter } from '@hooks/useRouter';
import qs from 'qs';
import { Location } from 'history';

interface InQueryParams {
  [k: string]: number | boolean | string;
}

interface OtherQueryParams {
  [k: string]: string | null | undefined;
}

type MergeParamsFn = (newParams: InQueryParams) => Location<any>;

const BOOLEAN_MAP = {
  true: true,
  false: false,
};

export function useQueryParams<T extends InQueryParams>(
  defaultParams: T = {} as any
): [T & OtherQueryParams, MergeParamsFn] {
  const { location } = useRouter();
  const q = qs.parse(location.search, { ignoreQueryPrefix: true });
  const params = { ...defaultParams, ...q };
  Object.entries(params).forEach(([k, v]) => {
    if (typeof defaultParams[k] === 'boolean') {
      params[k] = BOOLEAN_MAP[v as keyof typeof BOOLEAN_MAP];
      if (params[k] == null) params[k] = defaultParams[k];
    } else if (typeof defaultParams[k] === 'number') {
      params[k] = Number(v);
      if (Number.isNaN(params[k])) params[k] = defaultParams[k];
    }
  });
  const mergeParams = (newParams: InQueryParams) => {
    return {
      ...location,
      search: qs.stringify(
        {
          ...params,
          ...newParams,
        },
        { addQueryPrefix: true }
      ),
    };
  };
  return [params, mergeParams];
}
