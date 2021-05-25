import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPayPalModule } from "ngx-paypal";
import { Ng5SliderModule } from "ng5-slider";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { SharedModule } from "../shared/shared.module";
import { ShopRoutingModule } from "./shop-routing.module";

// Product Details Components
import { ProductLeftSidebarComponent } from "./product/sidebar/product-left-sidebar/product-left-sidebar.component";

// Product Details Widgest Components
import { ServicesComponent } from "./product/widgets/services/services.component";
import { CountdownComponent } from "./product/widgets/countdown/countdown.component";
import { SocialComponent } from "./product/widgets/social/social.component";
import { StockInventoryComponent } from "./product/widgets/stock-inventory/stock-inventory.component";
import { RelatedProductComponent } from "./product/widgets/related-product/related-product.component";

import { CartComponent } from "./cart/cart.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
  declarations: [
    ProductLeftSidebarComponent,
    ServicesComponent,
    CountdownComponent,
    SocialComponent,
    StockInventoryComponent,
    RelatedProductComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    NgxPayPalModule,
    Ng5SliderModule,
    InfiniteScrollModule,
    SharedModule,
    ShopRoutingModule,
  ],
})
export class ShopModule {}
