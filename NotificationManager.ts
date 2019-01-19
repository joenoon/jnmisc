import {observable, IObservableArray, toJS} from 'mobx';

export interface NotificationObject {
  key: number;
  action: string;
  dismissAfter: number;
  message: string;
  title: string;
  onClick(notification: NotificationObject, deactivate: () => void): void;
  cancelTimeout?: AnyFunction;
}

export type NotificationProps = Partial<NotificationObject>;

let notificationIdent = 0;

export class NotificationManager {
  @observable _notifications: IObservableArray<NotificationObject> = [] as any;

  add = (notification: NotificationProps) => {
    this._notifications.push({
      onClick: this.remove,
      dismissAfter: 5000,
      action: 'Dismiss',
      message: '',
      title: '',
      ...notification,
      key: notificationIdent += 1,
    });
  };

  remove = (notification: NotificationObject): boolean => {
    const {_notifications} = this;
    const found = this.getObservable(notification);
    if (found) return _notifications.remove(found);
    return false;
  };

  toJS = () => toJS(this._notifications);

  getObservable = (notification: NotificationObject) => {
    const {_notifications} = this;
    const {key} = notification;
    return _notifications.find(n => n.key === key);
  };

  startDismiss = (notification: NotificationObject): boolean => {
    const found = this.getObservable(notification);
    if (found) {
      if (found.dismissAfter) {
        const t = setTimeout(() => {
          this.remove(notification);
        }, found.dismissAfter);
        found.cancelTimeout = () => clearTimeout(t);
        return true;
      }
    }
    return false;
  };

  // @unused
  cancelDismiss = (notification: NotificationObject): boolean => {
    const found = this.getObservable(notification);
    if (found) {
      const {cancelTimeout} = found;
      if (cancelTimeout) {
        delete found.cancelTimeout;
        cancelTimeout();
        return true;
      }
    }
    return false;
  };

  canDismiss = (notification: NotificationObject): boolean => {
    const found = this.getObservable(notification);
    if (found) {
      const {cancelTimeout} = found;
      if (cancelTimeout) return true;
    }
    return false;
  };
}
