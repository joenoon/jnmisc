import {useMemo, useRef} from 'react';
import {observable} from 'mobx';

export function useMemoObservable<S>(value: S): [S, number] {
  const ref = useRef(0);
  const val = useMemo(() => {
    ref.current += 1;
    if (value == null) return value;
    return observable(value);
  }, [value]);
  return [val, ref.current];
}