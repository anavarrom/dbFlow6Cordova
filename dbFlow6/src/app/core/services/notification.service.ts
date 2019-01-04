// External Imports
import { Injectable              } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable              } from 'rxjs';
import { AuthService             } from 'ng2-ui-auth';
import { environment} from '../../../environments/environment';
import * as automapper from 'automapper-ts';

import 'rxjs/add/operator/map';
// Shared Imports
import { Appointment, IAppointment      } from '../models/appointments';
import { Notification, INotification      } from '../models/notification';
import { ITokenUser                     } from '../models/user';

// Internal Imports
import {IPaginateOptions, IPaginateResult2 } from './basePagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor ( private http: HttpClient,
                private auth: AuthService) {
    this.initMapping();
  }

  getNotificationsPage(options: IPaginateOptions): Observable<INotification[]> {
    return this.http.post(environment.baseURL + '/auth/notification/pageNotifications', options)
    .pipe(
      map(this.mapNotification)
    );
  }

   addNotification(notification: INotification): Observable<INotification> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(environment.baseURL + '/auth/notification/addNotification', notification, httpOptions)
    .map(response => response as INotification);
  }

  private initMapping() {
    // Create the mapping
    const makeDateFunc = (opts: AutoMapperJs.IMemberConfigurationOptions) => new Date(opts.intermediatePropertyValue);
    automapper.createMap('NotifiCationService', 'Notification')
        .forMember('emittedDate', makeDateFunc);
  }

  private mapNotification(data: Object): INotification[] {
      const result = data as IPaginateResult2;
      return result.docs.map(notification => automapper.map('NotifiCationService', 'Notification', notification)
      );
  }

}
