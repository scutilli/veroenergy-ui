import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltersComponent } from './filters/filters.component';

import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
    pathMatch: 'full'
  },
  {
    path: 'filters',
    component: FiltersComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    DropDownListModule,
    TextBoxModule,
    CheckBoxModule,
    ContextMenuModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, ButtonsComponent, FiltersComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
