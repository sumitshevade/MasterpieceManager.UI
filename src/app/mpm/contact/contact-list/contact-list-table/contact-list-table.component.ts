import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';

import { ContactListTableService } from 'app/mpm/contact/contact-list/contact-list-table/contact-list-table.service';

@Component({
  selector: 'app-contact-list-table',
  templateUrl: './contact-list-table.component.html',
  styleUrls: ['./contact-list-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactListTableComponent implements OnInit, OnDestroy {
  // public
  public data: any;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public selectedStatus = [];
  public searchValue = '';
  public CurrentPage = 1;
  public pageSize = 9;
  public rows;

  // decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CalendarService} _calendarService
   * @param {ContactListTableService} _contactListTableService
   */
  constructor(private _contactListTableService: ContactListTableService, private _coreConfigService: CoreConfigService) {
    this._unsubscribeAll = new Subject();
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe config change
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      // If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._contactListTableService.onContactListTableChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
            this.rows = this.data;
          });
        }, 450);
      } else {
        this._contactListTableService.onContactListTableChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.data = response;
          this.rows = this.data;
        });
      }
    });
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
