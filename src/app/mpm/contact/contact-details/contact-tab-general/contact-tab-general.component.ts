import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';

import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

// import { ContactDetailsService } from 'app/mpm/contact/contact-details/contact-details.service';
import { DataService } from 'app/mpm/contact/contact-details/data.service';
import * as snippet from 'app/mpm/contact/contact-details/pills.snippetcode';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { runInThisContext } from 'vm';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-tab-general',
  templateUrl: './contact-tab-general.component.html',
  styleUrls: ['./contact-tab-general.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactTabGeneralComponent implements OnInit, OnDestroy {
  // public
  public url = this.router.url;
  public lastValue;
  public data;
  public multiIconGithubUsers: Observable<any[]>;
  public multiCustomGithubUsersSelected = ['anjmao'];
  public _snippetCodeBasic = snippet.snippetCodeBasic;
  // Basic Date Picker
  public basicDPdata: NgbDateStruct;

  contactDetailsForm: FormGroup;


  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {Router} router
   * @param {UserViewService} _userViewService
   * @param {DataService} dataService
   */
  constructor(private router: Router, private http: HttpClient, private dataService: DataService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);

    this.contactDetailsForm = new FormGroup({
      'firstName': new FormControl(),
      'lastName': new FormControl(),
      'spousePartner': new FormControl(),
      'companyId': new FormControl(),
      'jobTitle': new FormControl(),
      'url': new FormControl(),
      'dob': new FormControl(),
      'dod': new FormControl(),
      'consignment': new FormControl(),
      'normalDiscount': new FormControl(),
      'maximumDiscount': new FormControl(),
      'importId': new FormControl(),
      'terms': new FormControl(),
      'shipVia': new FormControl(),
      'companyLocationId': new FormControl(),
      'staffId': new FormControl(),
      'source': new FormControl(),
      'custom': new FormControl(),
      'custom1': new FormControl(),
      'custom2': new FormControl(),
      'custom3': new FormControl()

    })

  }


  ngOnInit(): void {
    this.multiIconGithubUsers = this.dataService.getGithubAccounts('anjm');
    console.log(this.multiIconGithubUsers);
  }


  onContactDetails() {
    console.log(this.contactDetailsForm.value)
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('auth'))
    console.log(localStorage.getItem('auth'))
    this.http.post('http://104.237.6.240/api/Contact', this.contactDetailsForm, {'headers':headers})
      .subscribe(response => {
        console.log(response)
      }, error => {
        console.log(error.message)
      })
  }


  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
