import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ContactDetailsService } from 'app/mpm/contact/contact-details/contact-details.service';
import { DataService } from 'app/mpm/contact/contact-details/data.service';
import * as snippet from 'app/mpm/contact/contact-details/pills.snippetcode';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  // public
  public url = this.router.url;
  public lastValue;
  public data;
  public multiIconGithubUsers: Observable<any[]>;
  public multiCustomGithubUsersSelected = ['anjmao'];
  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public contentHeader: object;
  public swiperswiperCenteredSlides: SwiperConfigInterface = {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };
  public centeredSlideIndex = 2;

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {Router} router
   * @param {UserViewService} _userViewService
   * @param {DataService} dataService
   */
  constructor(private router: Router, private _contactDetailsService: ContactDetailsService, private dataService: DataService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
    this.contentHeader = {
      // feather feather-home
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/',
            linkicon: 'home'
          },
          {
            name: 'Contact List',
            isLink: false
          }
          // {
          //   name: 'Contact Details',
          //   isLink: false
          // }
        ]
      }
    };
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    console.log(this.url);
    this._contactDetailsService.onUserViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
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
