import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LevelsComponent } from './levels/levels.component';
import { PricingComponent } from './pricing/pricing.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path: "levels", component:LevelsComponent},
  {path:'pricing',component:PricingComponent},
  {path:'stats',component:StatsComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
