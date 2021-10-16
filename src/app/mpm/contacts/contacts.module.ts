import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { CoreCommonModule } from '@core/common.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreSidebarModule } from '@core/components';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ContactListTableComponent } from 'app/mpm/contacts/contact-list-table/contact-list-table.component';
import { ContactListTableService } from 'app/mpm/contacts/contact-list-table/contact-list-table.service';
import { ContactKpiService } from 'app/mpm/contacts/contact-kpi/contact-kpi.service';
import { ContactComponent } from 'app/mpm/contacts/contact/contact.component';
import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';

const routes: Routes = [
  {
    path: 'list',
    component: ContactListTableComponent,
    resolve: {
      uls: ContactListTableService
    },
    data: { animation: 'InvoiceListComponent' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin], animation: 'contact' },
    resolve: {
      css: ContactKpiService,
      inv: ContactListTableService
    }
  }
];

@NgModule({
  declarations: [ContactListTableComponent, ContactComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CoreDirectivesModule, Ng2FlatpickrModule,
    NgxDatatableModule, FormsModule, CorePipesModule, NgbModule, NgSelectModule, CoreSidebarModule],
  providers: [ContactListTableService, ContactKpiService],
  exports: [ContactListTableComponent, ContactComponent]
})
export class ContactsModule {}

