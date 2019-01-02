import { State, Store, StateContext, Action } from '@ngxs/store';
import { LoadNotifications } from '../actions/notification.actions';

import { NotificationService                         } from '../services/notification.service';
import { Notification, INotification                 } from '../models/notification';
import { PaginateOptions, IPaginateResult2            } from '../services/basePagination';


// Create an interface for
export interface INotificationState {
    notifications: Notification[];
    size: number;
}

// Creamos nuestro estado con la anotación @State
// Le damos el tipo al estado.
// Le damos nombre al 'slice' o partición del estado.
// Damos valor por defecto al estado.
@State({
    name: 'notification',
    defaults: {
        notifications: [],
        size: 0
    }
})
export class NotificationState {
    private notificationOptions: PaginateOptions   = null;

    constructor(private store: Store, private notifService: NotificationService) {
        this.notificationOptions        = new PaginateOptions();
        this.notificationOptions.limit  = 50;
        this.notificationOptions.page   = 0;
    }


    @Action(LoadNotifications)
    LoadNotifications(stateContext: StateContext<INotificationState>) {
        this.notifService.getNotificationsPage(this.notificationOptions).subscribe(
            (notifs: IPaginateResult2) => {

              const notifs2: Notification[] = notifs.docs as Notification[];

              // Actualizamos el estado con pathState({nombre_propiedad: valor}).
              stateContext.patchState({ notifications: notifs2, size: notifs2.length });

              // const obj = notifications.docs[0];
              // const objB: INotification = automapper.map('NotifiCationService', 'Notification', obj);
              // this.notifications.push(objB);
      /*
              const r = R.groupWith(
                (a: Notification, b: Notification) => a.emittedDate.getMonth() === b.emittedDate.getMonth() ,
                this.notificationStore.allNotifications);
                return r;
                */
              // this.notifications.push.apply(this.notifications, notifs);
              // this.notificationOptions.offset += 2;
                    // R.map((item, index) => {}, items);
                     // this.notifications = this.notificationStore.allNotifications;
            }, err => {
              // Log errors if any
              console.log(err);
            }
          );

    }
}
