import React, {useContext} from 'react';
import {observable, computed} from 'mobx';
import {NotificationManager} from './NotificationManager';

let spinnerIdent = 0;

export class Store {
  @observable loginIsOpen = false;

  notifications = new NotificationManager();

  //// Spinners

  _spinners = observable.map({});

  addSpinner = () => {
    const {_spinners} = this;
    const key = `s${(spinnerIdent += 1)}`;
    _spinners.set(key, true);
    return {
      remove: () => void _spinners.delete(key),
    };
  };

  @computed get spinnersCount() {
    return this._spinners.size;
  }

  /////
}

export const StoreContext = React.createContext<Store>(null as any);

export function useStore() {
  return useContext(StoreContext);
}