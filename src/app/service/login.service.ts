import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import { ApiModules } from '../service/app.url.constant';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private apiHandler : ApiHandlerService) { }

  login(loginData){
   return this.apiHandler.post(ApiModules.auth.login,loginData)
  }
}
