import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// import { ContactDetailsService } from 'app/mpm/contact/contact-details/contact-details.service';
import { DataService } from 'app/mpm/contact/contact-details/data.service';
import * as snippet from 'app/mpm/contact/contact-details/pills.snippetcode';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

@Component({
  selector: 'app-contact-tab-contact',
  templateUrl: './contact-tab-contact.component.html',
  styleUrls: ['./contact-tab-contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactTabContactComponent implements OnInit, OnDestroy {
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
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private dataService: DataService, private _coreSidebarService: CoreSidebarService
    ) {
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

  /**
   * Toggle the sidebar
   *
   * @param name
   */
   toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

}
