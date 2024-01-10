import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppServicesService } from 'app/app-services.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent implements OnInit{
  constructor(public a_services: AppServicesService, public router: Router){

  }

  data = this.a_services.temp
  code:string = '<form>\n';
  
  c:string = '';
  i:number = 0;
  ngOnInit(): void {
    this.display();
    this.c = this.code.replace('\n', '');
    this.a_services.htmlcode = this.c;
  }

  onClick()
  {
    navigator.clipboard.writeText(this.code);
  }

  display()
  {
    this.code += '<div class="in_container" style="display: flex; flex-direction: column;justify-content: space-between;">\n';
    for(let d of this.data)
    {
      if((d.type == 'text' || d.type == 'email' || d.type == 'password') && d.required == 'true')
      {
        this.code += `    <label>${d.name}</label>\n    <input type='${d.type}' required>\n`;
      }
      else if((d.type == 'text' || d.type == 'email' || d.type == 'password') && d.required == 'false')
      {
        this.code += `    <label>${d.name}</label>\n    <input type='${d.type}'>\n`;
      }
      else if(d.type == 'radio' && d.required == 'true')
      {
        this.code += `    <label>${d.name}</label>\n`;
        for(let o in d.options)
        this.code += `        <label>${d.options[o]}<label>\n        <input type='${d.type}' id='${this.i}' name='${d.name}'required>\n`;
      }
      else if(d.type == 'radio' && d.required == 'false')
      {
        this.code += `    <label>${d.name}</label>\n`;
        for(let o in d.options)
        {
          this.code += `        <label>${d.options[o]}</label>\n        <input type='${d.type}' id='${this.i}'  name='${d.name}'>\n`;
        }
      }
      else if(d.type == 'dropdown' && d.required == 'true')
      {
        this.code += `    <label>${d.name}</label>\n    <select required>\n`;
        for(let o in d.options)
        {
          this.code += `        <option>${d.options[o]}</option>\n`;
        }
        this.code += `    </select>\n`;
        
      }
      else if(d.type == 'dropdown' && d.required == 'false')
      {
        this.code += `    <label>${d.name}</label>\n    <select>\n`;
        for(let o in d.options)
        {
          this.code += `        <option>${d.options[o]}</option>\n`;
        }
        this.code += `    </select>\n`;
        
      }

    }
    this.code += '</div>\n';
    this.code += '</form>'
  }

  change_route()
  {
    this.router.navigate(['/form']);
  }

}
