/*modulo para especifar las rutas de la app*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]; /*contante de tipo Routes con las rutas de la aplicacion*/

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
