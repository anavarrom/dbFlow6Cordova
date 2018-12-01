import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { ReactiveFormsModule      } from '@angular/forms';
import { Ng2UiAuthModule          } from 'ng2-ui-auth';
import { MobxAngularModule        } from 'mobx-angular';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import {environment} from '../environments/environment';

// Temporal Components
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SideComponent } from './page1/side/side.component';
import { ContentComponent } from './page1/content/content.component';
import { Tab1Component } from './page1/content/tab1/tab1.component';
import { Tab2Component } from './page1/content/tab2/tab2.component';

// Custom  modules
import { AppRoutingModule         } from './app-routing.module';
import { SecureModule             } from './secure/secure.module';
import { CoreModule             } from './core/core.module';
// import { SharedModule             } from './shared/shared.module';
// import { NotificationsModule         } from './secure/notifications/notifications.module';
// import { FilesModule              } from './secure/files/files.module';

// Custom Components
import { PublicComponent } from './public/public.component';

import { LoginComponent } from './public/login/login.component';

// Project Services
import { FormHelperService } from './core/services/form-helper.service';
import { JsonInterceptorService } from './core/interceptors/json-interceptor.service';
import { MyHttpLogInterceptor } from './core/interceptors/http.intercept';
// import {MyErrorHandler} from './shared/errors/MyErrorHandler';

import { authConfigOptions } from './app-config';
/**
 * Page components
 */
const pages = [
  Page1Component,
  Page2Component,
  SideComponent,
  ContentComponent,
  Tab1Component,
  Tab2Component,
];

const dbFlow6Components = [
  LoginComponent,
  PublicComponent
];

const externalModules = [
  AppRoutingModule,
  ReactiveFormsModule,
  Ng2UiAuthModule,
  MobxAngularModule
];
const customModules = [
  SecureModule,
  CoreModule
];


@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...dbFlow6Components
  ],
  entryComponents: [
    ...pages,
    ...dbFlow6Components
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    ...externalModules,
    ...customModules,
    Ng2UiAuthModule.forRoot(authConfigOptions.options)
  ],
  providers: [
    JsonInterceptorService,
    FormHelperService,
  //  { provide: ErrorHandler, useValue: MyErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
