import {environment} from '../environments/environment';
import { ConfigService } from 'ng2-ui-auth';


const authConfigOptions  = new ConfigService({
  baseUrl: environment.baseURL,
  providers: {
      google: {
        clientId: '1040156216476-moaoejmnru44umfgjulbbr1tkb5lef7c.apps.googleusercontent.com',
        scope: [
          'https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/gmail.readonly',
          'https://mail.google.com/',
          'https://www.googleapis.com/auth/gmail.modify',
          'https://www.googleapis.com/auth/drive.appfolder',
          'https://www.googleapis.com/auth/drive.file',
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/calendar'
        ]
      }
    }
  });

  export {authConfigOptions};
