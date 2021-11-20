import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { LocalStorageService } from 'app/service/local-storage.service';
import { LoginService } from 'app/service/login.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactListComponent implements OnInit {
  kpiChecked = true;

  receiveKpiValue($event) {
    this.kpiChecked = $event
  }

  public contentHeader: object;

  constructor(private loginService: LoginService,
    private localStorage: LocalStorageService) {
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
    let userData = {
      "email": "sumitshevade@gmail.com",
      "password": "Sumit@123"
    }

    // this.http.post('http://104.237.6.240/api/Auth/login', userData, {observe : 'response'})
    // .subscribe((response:any) => {
    //  let res = response.body
    //  console.log(response.body.token)
    //  localStorage.setItem('auth', res.token)
    // },error => {
    //   console.log(error)
    // })


    this.loginService.login(userData).subscribe((response: any) => {
      console.log(response)
      let res = response
      this.localStorage.setValue('auth', res.token)

    }, error => {
      console.log(error)
    })


  }

  /**
   * After View Init
   */
  ngAfterViewInit() {
  }
}
