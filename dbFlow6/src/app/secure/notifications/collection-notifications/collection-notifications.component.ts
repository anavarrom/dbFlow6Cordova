import { Component, OnInit, ViewChild } from '@angular/core';
// import {MatDialog, MatTabsModule, MatCardModule, MatInput, MatFormField} from '@angular/material';

import { NotificationDetailComponent  } from '../notification-detail/notification-detail.component';
import { Notification                 } from '../../../core/models/notification';
import { NotificationStore            } from '../../../core/stores/notification-store';
import { UserStore                    } from '../../../core/stores/user-store';

import * as R from 'ramda';
import { observable, computed, action, autorun, toJS } from 'mobx';

import { Store, Select } from '@ngxs/store';
import { LoadNotifications } from '../../../core/actions/notification.actions';

import { Observable } from 'rxjs';
import { NotificationState, INotificationState } from '../../../core/stores/notification.state';


@Component({
  selector: 'ons-page[app-notifications]',
  templateUrl: './collection-notifications.component.html',
  styleUrls: ['./collection-notifications.component.scss']
})
export class CollectionNotificationsComponent implements OnInit {
  // @ViewChild('patata') input: MatFormField;
  @Select(state => state.notification)
  notification$: Observable<INotificationState>;
  // notifications:   Notification[];

  constructor(/* public dialog: MatDialog,*/
               private store: Store,
               public  notificationStore: NotificationState) {

               this.store.dispatch(new LoadNotifications());
              // this.notificationStore.L();

              // this.notificationStore.allNotifications().subscribe();;

              // R.map((item, index) => {}, items);

               // this.notifications = this.notificationStore.allNotifications;
  }

/*  @computed get notifViews(): Notification[] {

    //   const r = R.map((item: Notification, index) => {
    //     const pp: NotificationViewModel =  new NotificationViewModel();
    //     pp.year = item.emittedDate.toLocaleDateString('es-ES', {month: 'string'}) ;
    //     return pp;

    // }, this.notificationStore.allNotifications);
    const r = R.groupWith(
      (a: Notification, b: Notification) => a.emittedDate.getMonth() === b.emittedDate.getMonth() ,
      this.notificationStore.allNotifications);
      return r;
  }
*/
  newNotification(): void {
    // const dialogRef = this.dialog.open(NotificationDetailComponent, {
    //  width: '640px',
    //  height: '480px'
      // , data: { name: this.name, animal: this.animal }
    // });

    // dialogRef.afterClosed().subscribe(result => {
     // console.log('The dialog was closed');
     // this.animal = result;
    // });
  }

  moreNotifications(): void {
  // this.notificationStore.moreNotifications();
  }

  ngOnInit() {
   // this.input.underlineRef.nativeElement.className = null;
  }
}
