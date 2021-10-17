import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ContactListComponent } from 'app/mpm/contact/contact-list/contact-list.component';
import { ContactListTableComponent } from 'app/mpm/contact/contact-list/contact-list-table/contact-list-table.component';
import { ContactListTableService } from 'app/mpm/contact/contact-list/contact-list-table/contact-list-table.service';
import { ContactKpiComponent } from 'app/mpm/contact/contact-kpi/contact-kpi.component';
import { ContactKpiService } from 'app/mpm/contact/contact-kpi/contact-kpi.service';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

const routes = [
  {
    path: 'list',
    component: ContactListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin], 
      animation: 'danalytics' },
    resolve: {
      css: ContactKpiService,
      inv: ContactListTableService
    }
  },
  {
    path: 'contact-details',
    redirectTo: '/apps/mpm/contact/contact-details/2' // Redirection
  },
];

@NgModule({
  declarations: [ContactListComponent, ContactListTableComponent, ContactKpiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    NgApexchartsModule,
    ContentHeaderModule,
    NgxDatatableModule,
    NgSelectModule,
    CardSnippetModule
  ],
  providers: [ContactListTableService, ContactKpiService],
})
export class ContactModule {}
