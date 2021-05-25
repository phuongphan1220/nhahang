import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductLeftSidebarComponent } from "./product/sidebar/product-left-sidebar/product-left-sidebar.component";

import { CollectionLeftSidebarComponent } from "./collection/collection-left-sidebar/collection-left-sidebar.component";
import { CollectionRightSidebarComponent } from "./collection/collection-right-sidebar/collection-right-sidebar.component";
import { CollectionNoSidebarComponent } from "./collection/collection-no-sidebar/collection-no-sidebar.component";
import { CollectionInfinitescrollComponent } from "./collection/collection-infinitescroll/collection-infinitescroll.component";

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
    path: "collection/left/sidebar",
    component: CollectionLeftSidebarComponent,
  },
  {
    path: "collection/right/sidebar",
    component: CollectionRightSidebarComponent,
  },
  {
    path: "collection/no/sidebar",
    component: CollectionNoSidebarComponent,
  },
  {
    path: "collection/infinitescroll",
    component: CollectionInfinitescrollComponent,
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
