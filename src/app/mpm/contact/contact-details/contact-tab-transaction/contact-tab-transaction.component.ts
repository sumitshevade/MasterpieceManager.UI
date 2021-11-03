import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as snippet from 'app/mpm/contact/contact-details/contact-tab-transaction/datatables.snippetcode';
import { DatatablesService } from 'app/mpm/contact/contact-details/contact-tab-transaction/datatables.service';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

@Component({
  selector: 'app-contact-tab-transaction',
  templateUrl: './contact-tab-transaction.component.html',
  styleUrls: ['./contact-tab-transaction.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactTabTransactionComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;
  public _snippetCodeResponsive = snippet.snippetCodeResponsive;
  public rows: any;
  public ColumnMode = ColumnMode;
  public transactionData=[
    {id: 1, trans: '20713', date: '11 September 2021', title: 'Tranquility Box with Quote', artist: 'Mike Mikutowski', edition:'Limited', type:'Sale', qty:'12', itemTotal:'42.41', transTotal:'60.90', location:'Dovetail Collection'},
    {id: 1, trans: '20712', date: '12 September 2021', title: 'Glass Pumpkin, deluxe finish, Small', artist: 'Mike', edition:'', type:'Sale', qty:'3', itemTotal:'9.99', transTotal:'60.90', location:'Dovetail Collection'},
    {id: 1, trans: '20711', date: '22 September 2021', title: 'Tranquility Box', artist: 'Mikutowski', edition:'Limited', type:'Sale', qty:'2', itemTotal:'10.12', transTotal:'60.90', location:'Dovetail Collection'}
  ]

   /**
   * Constructor
   *
   * @param {DatatablesService} _datatablesService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _datatablesService: DatatablesService, private _coreSidebarService: CoreSidebarService
    ) {    this._unsubscribeAll = new Subject();

  }

  /**
   * On init
   */
  ngOnInit(): void {
    // this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //   this.rows = response;
    //   console.log(this.rows);
    // });
    this.rows = this.transactionData;
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

}
