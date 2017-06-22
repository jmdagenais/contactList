import {Routes} from "@angular/router";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {FORM_MODE} from './shared/constants';

export const appRoutes: Routes = [
  {
    path: 'edit/:id',
    component: ContactFormComponent,
    data: {mode: FORM_MODE.EDIT}
  },
  {
    path: 'new',
    component: ContactFormComponent,
    data: {mode: FORM_MODE.CREATE}
  },
  {
    path: '',
    component: ContactListComponent
  },
];
