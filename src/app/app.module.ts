import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouterComponent } from './couter/couter.component';
import { GroupCounterComponent } from './group-counter/group-counter.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@NgModule({
  declarations: [AppComponent, CouterComponent, GroupCounterComponent],
  imports: [BrowserModule, AppRoutingModule, NzButtonModule, NzLayoutModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
