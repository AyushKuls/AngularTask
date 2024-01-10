import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormComponent } from "./form/form.component";
import { ReactiveFormsModule, FormsModule, Validators } from "@angular/forms";
import { TableComponent } from "./table/table.component";
import { PreviewComponent } from "./preview/preview.component";
import { FinalFormComponent } from "./final-form/final-form.component";


@NgModule({
    declarations: [AppComponent, FormComponent, TableComponent, PreviewComponent, FinalFormComponent],
    imports: [BrowserModule, ReactiveFormsModule, FormsModule],
    bootstrap: [AppComponent],
})

export class AppModule {}