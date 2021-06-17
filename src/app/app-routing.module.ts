import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgplFieldTestComponent} from './app-test/ngpl-field-test/ngpl-field-test.component';

const routes: Routes = [
  {
    path: 'ngpl-field',
    component: NgplFieldTestComponent
  }, {
    path: '**',
    component: NgplFieldTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
