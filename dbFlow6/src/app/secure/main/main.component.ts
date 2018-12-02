import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


import {MessageStore} from '../../core/stores/message-store';

import {CollectionNotificationsComponent} from '../notifications/collection-notifications/collection-notifications.component';

@Component({
  selector: 'ons-page[app-main]',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: []
})

export class MainComponent implements OnInit {
  user: any;
  expiration: Date;
  secret: Observable<string>;

  tabs = [{
    label: 'Notifications',
    icon: 'ion-home',
    page: CollectionNotificationsComponent,
  }];

  constructor(private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    public  messages: MessageStore) {
  }

  ngOnInit() {
    this.user       = this.auth.getPayload();
    this.expiration = this.auth.getExpirationDate();
    this.secret     = this.http.get<string>('/secret');
  }

  logout() {
    this.auth.logout()
      .subscribe({
        error: (err: any) => alert(err.message),
        complete: () => this.router.navigateByUrl('login')
      });
  }

  refresh() {
    this.http.get<string>('/auth/refresh')
      .pipe(tap(token => this.auth.setToken(token)))
      .subscribe({
        error: (err: any) => alert(err.message),
        complete: () => this.expiration = this.auth.getExpirationDate()
      });
  }

  onPrechange(event) {

  }
}

