import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {environment} from "../../../../environments/environment.prod";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  serviceUrl = environment.serviceUrl;
  listProduct: any[];
  bsModalRef: BsModalRef;
  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private modalService: BsModalService) {
    this.setValues(undefined);
  }

  ngOnInit(): void {
    this.spinner.show();
    this.http.get<any[]>(`${this.serviceUrl}/product/list`).subscribe(data => {
      data.forEach(item=>item.images=item.images.split(','));
      this.listProduct = data;
      this.spinner.hide();
    });
  }

  openProductDetail(product: any) {
    const initialState = {
      selectedProduct: product
    };
    this.bsModalRef = this.modalService.show(ProductDetailComponent, {initialState});

  }

  setValues(values: any[]) {
    (values ??= []).push("hello");
    return values;
  }
}
