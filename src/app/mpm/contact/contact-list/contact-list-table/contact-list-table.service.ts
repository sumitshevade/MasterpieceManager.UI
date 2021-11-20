import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ContactListTableService {
  rows: any;
  onContactListChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onContactListChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  //   return new Promise<void>((resolve, reject) => {
  //     Promise.all([this.getDataTableRows()]).then(() => {
  //       resolve();
  //     }, reject);
  //   });
  // }

  /**
   * Get rows
   */
//   getDataTableRows() {
//     const headers = new HttpHeaders()
//     .set('Authorization',`Bearer ${localStorage.getItem('auth')}`)
//    // console.log(`Bearer ${localStorage.getItem('auth')}`)
//      return this._httpClient.get('http://104.237.6.240/api/Contact',{headers : headers})
// }

}