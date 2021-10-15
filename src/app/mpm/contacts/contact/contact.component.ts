import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  kpichecked = true;
  
  receiveKpiValue($event) {
    this.kpichecked = $event
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
