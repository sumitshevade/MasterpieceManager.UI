import { Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import { ContactKpiService } from 'app/mpm/contact/contact-kpi/contact-kpi.service';

@Component({
  selector: 'app-contact-kpi',
  templateUrl: './contact-kpi.component.html',
  styleUrls: ['./contact-kpi.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactKpiComponent implements OnInit {
  kpichecked = true;
  
  receiveKpiValue($event) {
    this.kpichecked = $event
  }

  // Public
  public data: any;
  public contentHeader: object;


  /**
   * Constructor
   *
   * @param {KpiService} _kpiService
   *
   */
  constructor(
    private _kpiService: ContactKpiService,
  ) 
  {
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
    // Get the kpi data
    this._kpiService.onApiDataChanged.subscribe(response => {
      this.data = response;
    });
  }

}
