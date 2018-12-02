import { Component, OnInit, ViewChild } from '@angular/core';
// import {MatDialog, MatTabsModule, MatCardModule, MatInput, MatFormField} from '@angular/material';

import {NotificationDetailComponent} from '../notification-detail/notification-detail.component';
import {Notification} from '../../../models/notification';
import { NotificationStore                } from '../../../core/stores/notification-store';
import { UserStore } from '../../../core/stores/user-store';

@Component({
  selector: 'ons-page[app-notifications]',
  templateUrl: './collection-notifications.component.html',
  styleUrls: ['./collection-notifications.component.scss']
})
export class CollectionNotificationsComponent implements OnInit {
  // @ViewChild('patata') input: MatFormField;
  notifications:   Notification[];

  constructor(/* public dialog: MatDialog,*/
               public  notificationStore: NotificationStore,
               public  userStore: UserStore) {

                this.notificationStore.moreNotifications();
               // this.notifications = this.notificationStore.allNotifications;
  }

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
    this.notificationStore.moreNotifications();
  }

  ngOnInit() {
   // this.input.underlineRef.nativeElement.className = null;
  }
}
