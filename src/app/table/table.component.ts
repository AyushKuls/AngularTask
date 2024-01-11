import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppServicesService } from 'app/app-services.service';
import {MatTableModule} from '@angular/material/table';
import { PreviewComponent } from 'app/preview/preview.component';
import { MatButtonModule } from '@angular/material/button';
import { Details } from 'app/details';



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, PreviewComponent, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent{
  constructor(public a_services: AppServicesService){}

  data = this.a_services.temp;

  displayedColumns: string[] = ['name', 'type', 'required', 'options', 'delete'];

  delete(element: Details)
  {
    this.data = this.a_services.temp;
    let index = this.data.indexOf(element);
    console.log(index);
    if(index !== -1){
      this.data.splice(index, 1);
    }

    console.warn(this.data);
    this.a_services.setValue(this.data);
    this.a_services.temp = this.data;
  }
  // datasouce = this.a_services.getValue();
}
