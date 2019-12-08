import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { LegaSharedModule } from 'app/shared/shared.module';
import { LegaCoreModule } from 'app/core/core.module';
import { LegaAppRoutingModule } from './app-routing.module';
import { LegaHomeModule } from './home/home.module';
import { LegaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    LegaSharedModule,
    LegaCoreModule,
    LegaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LegaEntityModule,
    LegaAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class LegaAppModule {}
