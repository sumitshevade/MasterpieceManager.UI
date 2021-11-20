import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { environment } from 'environments/environment';


@Injectable()
export class ApiHandlerService {
  url: string = ''
  ENV: any;

  constructor(private http:HttpClient) {
    this.ENV = environment
    this.url = this.ENV.basrUrl
    console.log(this.url)
   }

   get(endPoint :string) {
     console.log(this.url + '/' + endPoint)
    return this.http.get(this.url + '/' + endPoint);
   }

   post(endPoint : string, body? :any, reqOpts? :any) {
    console.log(this.url + '/' + endPoint)
    return this.http.post(this.url + '/' + endPoint, body)
   }

   put(endPoint : string, body: any) {
   this.http.put(this.url + '/' + endPoint, body)
   }

   delete(endPoint : string, body: any) {
   this.http.delete(this.url + '/' + endPoint, body)
   }
}
