import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import { ApiModules } from './app.url.constant';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiHandler : ApiHandlerService) { }

  getContactList() {
   return this.apiHandler.get(ApiModules.contactDetails.Contact)
  }
}
