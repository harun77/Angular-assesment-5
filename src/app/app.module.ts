import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListsComponent } from './components/lists/lists.component';
import { WidgetComponent } from './components/widget/widget.component';
import { PipeModule } from './pipes/pipe.module';
import { ProductListComponent } from './components/dashboard/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListsComponent,
    WidgetComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
