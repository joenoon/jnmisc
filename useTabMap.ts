import {useMemo} from 'react';

interface TabUIMapItem {
  path?: string;
  onClick?: any;
  name: string;
}
type TabUIMapData = TabUIMapItem[];

const EMPTY_TAB = {name: '', path: undefined, onClick: undefined};

export function useTabMap(data: TabUIMapData, changes?: any) {
  return useMemo(() => {
    const paths = data.map(x => x.path);
    const names = data.map(x => x.name);
    const indexOf = (path: string) => paths.indexOf(path);
    const byName = (name: string) => {
      const index = names.indexOf(name);
      if (index > -1) {
        return data[index];
      }
      return EMPTY_TAB;
    };
    const at = (index: number) => data[index] || EMPTY_TAB;
    return {data, at, byName, indexOf};
  }, changes || []);
}
