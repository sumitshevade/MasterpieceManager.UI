import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  kpiChecked = true;
  
  receiveKpiValue($event) {
    this.kpiChecked = $event
  }

  public contentHeader: object;

  constructor() {
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

  ngOnInit(): void {
  }
}
