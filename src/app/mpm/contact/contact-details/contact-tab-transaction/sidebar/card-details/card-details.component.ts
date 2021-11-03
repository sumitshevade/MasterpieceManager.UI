import { Component, OnInit } from '@angular/core';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html'
})
export class CardDetailsSidebarComponent implements OnInit {
  public card1Edit=0;
  public card2Edit=0;
  public card3Edit=0;

  /**
   * Constructor
   *
   * @param {InvoiceAddService} _invoiceAddService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  edit(card): void {
    if (card == 'card1'){
      this.card1Edit=1;
    }
    if (card == 'card2'){
      this.card2Edit=1;
    }
    if (card == 'card3'){
      this.card3Edit=1;
    }
  }

  cancel(card): void {
    if (card == 'card1'){
      this.card1Edit=0;
    }
    if (card == 'card2'){
      this.card2Edit=0;
    }
    if (card == 'card3'){
      this.card3Edit=0;
    }
  }

  ngOnInit(): void {}
}
