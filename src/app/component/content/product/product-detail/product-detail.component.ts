import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
declare var jQuery: any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  isShowModal: boolean = true;
  selectedProduct: any;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.loadSlideJquery();
  }

  onCloseModal() {
    this.bsModalRef.hide();
  }

  loadSlideJquery() {
    (function ($) {
      $(document).ready(function () {
        /*==================================================================
        [ Slick3 ]*/
        $('.wrap-slick3').each(function(){
          $(this).find('.slick3').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $(this).find('.wrap-slick3-arrows'),
            prevArrow:'<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            dots: true,
            appendDots: $(this).find('.wrap-slick3-dots'),
            dotsClass:'slick3-dots',
            customPaging: function(slick, index) {
              var portrait = $(slick.$slides[index]).data('thumb');
              return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
            },
          });
        });
      });
    })(jQuery);
  }

}
