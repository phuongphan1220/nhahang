import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductLeftSidebarComponent } from "./product/sidebar/product-left-sidebar/product-left-sidebar.component";

import { CartComponent } from "./cart/cart.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { CheckoutComponent } from "./checkout/checkout.component";

import { Resolver } from "../shared/services/resolver.service";

const routes: Routes = [
  {
    path: "product/left/sidebar/:slug",
    component: ProductLeftSidebarComponent,
    resolve: {
      data: Resolver,
    },
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "wishlist",
    component: WishlistComponent,
  },
  {
    path: "checkout",
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
