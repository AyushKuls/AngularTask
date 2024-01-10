import { Component } from '@angular/core';
import { AppServicesService } from './app-services.service';
import { PreviewComponent } from './preview/preview.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PreviewComponent, FormComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public a_services:AppServicesService){
    
  }
}
