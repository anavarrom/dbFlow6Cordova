// External Modules
import { NgModule          } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { FormsModule       } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';
import { RouterModule, Routes } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { NgxJsonViewerModule } from 'ngx-json-viewer';

// Custom modules
import {CoreModule} from '../core/core.module';
// Custom Components
import { MessageStore  } from '../core/stores/message-store';
import { UserStore     } from '../core/stores/user-store';
import { MainComponent } from './main/main.component';

import { CollectionNotificationsComponent } from './notifications/collection-notifications/collection-notifications.component';
import { NotificationDetailComponent } from './notifications/notification-detail/notification-detail.component';

// Project Services
import { UsersService           } from '../core/services/users.service';
import { SecureSocketioService  } from './secure-socketio.service';
import { SecureComponent        } from './secure.component';
// import { ProcessMessageComponent} from './messages/process-message/process-message.component';
// import { SearchComponent } from './search/search.component'

const externalModules = [
  CommonModule,
  FormsModule,
  MobxAngularModule,
  RouterModule,
];

const dbFlow6Components = [
  SecureComponent,
  MainComponent,
  CollectionNotificationsComponent,
  NotificationDetailComponent
];


@NgModule({
  imports: [
    ...externalModules,
    CoreModule
  ],
  entryComponents: [
    ...dbFlow6Components
  ],
  declarations: [
      ...dbFlow6Components
  ],
//  providers: [{ provide: Todos, useClass: remotedev(Todos) }],
  providers: [],
  exports: [SecureComponent],

})
export class SecureModule { }
