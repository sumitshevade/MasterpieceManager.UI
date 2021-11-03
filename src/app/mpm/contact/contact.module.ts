import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';

import { CoreCommonModule } from '@core/common.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreSidebarModule } from '@core/components';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { BreadcrumbModule } from 'app/layout/components/content-header/breadcrumb/breadcrumb.module';

import { ContactListComponent } from 'app/mpm/contact/contact-list/contact-list.component';
import { ContactListTableComponent } from 'app/mpm/contact/contact-list/contact-list-table/contact-list-table.component';
import { ContactListTableService } from 'app/mpm/contact/contact-list/contact-list-table/contact-list-table.service';
import { ContactKpiComponent } from 'app/mpm/contact/contact-kpi/contact-kpi.component';
import { ContactKpiService } from 'app/mpm/contact/contact-kpi/contact-kpi.service';

import { ContactDetailsComponent } from 'app/mpm/contact/contact-details/contact-details.component';
import { ContactDetailsService } from 'app/mpm/contact/contact-details/contact-details.service';

import { ContactTabGeneralComponent } from 'app/mpm/contact/contact-details/contact-tab-general/contact-tab-general.component';
import { ContactTabContactComponent } from 'app/mpm/contact/contact-details/contact-tab-contact/contact-tab-contact.component';
import { ContactTabTransactionComponent } from 'app/mpm/contact/contact-details/contact-tab-transaction/contact-tab-transaction.component';
import { AddPhoneNumberSidebarComponent } from 'app/mpm/contact/contact-details/contact-tab-contact/sidebar/add-phone-number/add-phone-number.component';
import { AddEmailSidebarComponent } from 'app/mpm/contact/contact-details/contact-tab-contact/sidebar/add-email/add-email.component';
import { AddAddressSidebarComponent } from 'app/mpm/contact/contact-details/contact-tab-contact/sidebar/add-address/add-address.component';
import { CardDetailsSidebarComponent } from 'app/mpm/contact/contact-details/contact-tab-transaction/sidebar/card-details/card-details.component';

import { DatatablesService } from 'app/mpm/contact/contact-details/contact-tab-transaction/datatables.service';

// swiper configuration
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const routes = [
  {
    path: 'list',
    component: ContactListComponent,
    //canActivate: [AuthGuard],
    data: { roles: [Role.Admin], 
      animation: 'danalytics' },
    resolve: {
      css: ContactKpiService,
      inv: ContactListTableService
    }
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailsComponent,
    resolve: {
      data: ContactDetailsService,
      // InvoiceListService
    },
    data: { path: 'view/:id', animation: 'ContactDetailsComponent' }
  },
  {
    path: 'contact-details',
    redirectTo: '/app/mpm/contact/contact-details/2' // Redirection
  },
];

@NgModule({
  declarations: [
    ContactListComponent, 
    ContactListTableComponent, 
    ContactKpiComponent, 
    ContactDetailsComponent,
    ContactTabGeneralComponent,
    ContactTabContactComponent,
    ContactTabTransactionComponent,
    AddPhoneNumberSidebarComponent,
    AddEmailSidebarComponent,
    AddAddressSidebarComponent,
    CardDetailsSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    CoreDirectivesModule,
    CorePipesModule,
    CoreSidebarModule,
    NgApexchartsModule,
    ContentHeaderModule,
    BreadcrumbModule,
    NgxDatatableModule,
    NgSelectModule,
    CardSnippetModule,
    SwiperModule
  ],
  providers: [ContactListTableService, ContactKpiService, ContactDetailsService, DatatablesService,{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
})
export class ContactModule {}
