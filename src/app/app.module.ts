import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {ContentComponent} from './component/content/content.component';
import {SlideComponent} from './component/content/slide/slide.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ProductComponent} from './component/content/product/product.component';
import {ProductDetailComponent} from './component/content/product/product-detail/product-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SlideComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    PerfectScrollbarModule
  ],
  entryComponents: [ProductDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
