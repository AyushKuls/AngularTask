import { Route } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { FinalFormComponent } from "./final-form/final-form.component";

export const APP_ROUTE : Route[] = [
    {path: '', component:FormComponent},
    {path: 'form', component:FinalFormComponent}
];