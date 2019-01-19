import React, {useContext} from 'react';
import {RouteComponentProps, StaticContext} from 'react-router';
import {__RouterContext} from 'react-router-dom';

const RouterContext = __RouterContext as React.Context<RouteComponentProps<any, StaticContext, any>>;

export function useRouter() {
  return useContext(RouterContext);
}