import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// import { ContactDetailsService } from 'app/mpm/contact/contact-details/contact-details.service';
import { DataService } from 'app/mpm/contact/contact-details/data.service';
import * as snippet from 'app/mpm/contact/contact-details/pills.snippetcode';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {Router} router
   * @param {UserViewService} _userViewService
   * @param {DataService} dataService
   */
  constructor(private router: Router, private dataService: DataService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this.multiIconGithubUsers = this.dataService.getGithubAccounts('anjm');
console.log(this.multiIconGithubUsers);
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
