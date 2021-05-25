import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShopComponent } from "./shop/shop.component";
import { ElementsComponent } from "./elements/elements.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home/vegetable",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "shop",
    component: ShopComponent,
    loadChildren: () => import("./shop/shop.module").then((m) => m.ShopModule),
  },
  {
    path: "elements",
    component: ElementsComponent,
    loadChildren: () =>
      import("./elements/elements.module").then((m) => m.ElementsModule),
  },
  {
    path: "**", // Navigate to Home Page if not found any page
    redirectTo: "home/fashion",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      useHash: false,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
