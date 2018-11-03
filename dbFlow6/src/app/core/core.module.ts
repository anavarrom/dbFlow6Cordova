// External Modules
import { NgModule          } from '@angular/core';
import { CommonModule      } from '@angular/common';

// Custom modules
// Custom Components
import { MessageStore  } from './stores/message-store';
import { UserStore     } from './stores/user-store';
import { CalendarStore     } from './stores/calendar-store';
import { NotificationStore     } from './stores/notification-store';

// Project Services
import { UsersService           } from './services/users.service';
import { NotificationService           } from './services/notification.service';
import { CalendarService           } from './services/calendar.service';
// import { ProcessMessageComponent} from './messages/process-message/process-message.component';
// import { SearchComponent } from './search/search.component'

const externalModules = [
  CommonModule,
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
    ...externalModules
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
