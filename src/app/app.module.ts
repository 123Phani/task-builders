import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { TablesComponent } from './tables/tables.component';
import { HttpClientModule } from "@angular/common/http";
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    TablesComponent,
    ChildComponent,
    AppComponent,
    SearchComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
