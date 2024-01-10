import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppServicesService } from 'app/app-services.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-final-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './final-form.component.html',
  styleUrl: './final-form.component.css'
})
export class FinalFormComponent{
  actualCode: string = '';
  ngOnInit(): void {}
  sanitizedHTML: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    public dataService: AppServicesService
  ) 
  {
    this.actualCode = this.dataService.htmlcode;
    this.sanitizedHTML = this.sanitizer.bypassSecurityTrustHtml(this.actualCode);
    console.log(this.actualCode);
  }
}
