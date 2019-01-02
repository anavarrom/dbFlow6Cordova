// External Modules
import { NgModule          } from '@angular/core';
import { CommonModule      } from '@angular/common';

// Custom modules
// Custom Components
import { MessageStore  } from './stores/message-store';
import { UserStore     } from './stores/user-store';
import { CalendarStore     } from './stores/calendar-store';
import { NotificationStore     } from './stores/notification-store';
import { NotificationState     } from './stores/notification.state';

// Project Services
import { UsersService           } from './services/users.service';
import { NotificationService           } from './services/notification.service';
import { CalendarService           } from './services/calendar.service';
// import { ProcessMessageComponent} from './messages/process-message/process-message.component';
// import { SearchComponent } from './search/search.component'

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';


const externalModules = [
  CommonModule,
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsLoggerPluginModule.forRoot()
];

const dbFlow6Stores = [
    NotificationStore,
    CalendarStore,
    UserStore,
    MessageStore
];

const dbFlow6Services = [
    UsersService,
    NotificationService,
    CalendarService
];


@NgModule({
  imports: [
    ...externalModules,
    NgxsModule.forRoot([NotificationState])
  ],
  entryComponents: [
  ],
  declarations: [
  ],
  providers:  [
    ...dbFlow6Stores,
    ...dbFlow6Services
  ],
  exports: [
  ],

})
export class CoreModule { }
