import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppServicesService } from 'app/app-services.service';
import {MatTableModule} from '@angular/material/table';
import { PreviewComponent } from 'app/preview/preview.component';



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, PreviewComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent{
  constructor(public a_services: AppServicesService){}

  displayedColumns: string[] = ['name', 'type', 'required', 'options'];
  // datasouce = this.a_services.getValue();
}
