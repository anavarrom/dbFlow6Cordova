// External Imports
// import remotedev                                       from 'mobx-remotedev/lib/dev';
import { Injectable                                  } from '@angular/core';
import { observable, computed, action, autorun, toJS } from 'mobx';

// Project Imports
import { NotificationService                         } from '../services/notification.service';
import { UsersService                                } from '../services/users.service';

import { Notification, INotification                                } from '../models/notification';
import { PaginateOptions, IPaginateResult2            } from '../services/basePagination';

import * as R from 'ramda';
import * as automapper from 'automapper-ts';

@Injectable()
export class NotificationStore {

  @observable notifications:       Notification[]    = [];
              notificationOptions: PaginateOptions   = null;

  constructor(private notifService: NotificationService,
              private usersService: UsersService) {

    this.notificationOptions        = new PaginateOptions();
    this.notificationOptions.limit  = 50;
    this.notificationOptions.page   = 0;

    this.initMapping();
    /*this.usersService.processLabels();
        autorun(() => {
    });*/
  }


  @computed get allNotifications(): Notification[] {
    return this.notifications;
  }

  @action addNotification(notification: Notification) {
    this.notifService.addNotification(notification).subscribe(
      notif => {
        this.notifications.push(notif);
      }, err => {
        // Log errors if any
        console.log(err);
      }
    );
  }

  @action moreNotifications() {
    this.notifService.getNotificationsPage(this.notificationOptions).subscribe(
      (notifications: IPaginateResult2) => {

        const obj = notifications.docs[0];

        const objB: INotification = automapper.map('NotifiCationService', 'Notification', obj);
        this.notifications.push(objB);
/*
        const r = R.groupWith(
          (a: Notification, b: Notification) => a.emittedDate.getMonth() === b.emittedDate.getMonth() ,
          this.notificationStore.allNotifications);
          return r;
          */
        // const notifs: Notification[] = notifications.docs;
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

  private initMapping() {
    // Create the mapping
    const makeDateFunc = (opts: AutoMapperJs.IMemberConfigurationOptions) => new Date(opts.intermediatePropertyValue);
    automapper.createMap('NotifiCationService', 'Notification')
        .forMember('emittedDate', makeDateFunc);
  }
}
