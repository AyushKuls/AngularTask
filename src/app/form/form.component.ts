import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {Details} from '../details';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { TableComponent } from 'app/table/table.component';
import { AppServicesService } from 'app/app-services.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { PreviewComponent } from 'app/preview/preview.component';



export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatRadioModule, MatButtonModule, TableComponent, MatChipsModule, MatIconModule, PreviewComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent{
  dets: Details[] = [];
  value:string = ''

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  options: string[] = [];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value:string = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.options.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(opt:string): void {
    const index = this.options.indexOf(opt);

    if (index >= 0) {
      this.options.splice(index, 1);

      this.announcer.announce(`Removed ${opt}`);
    }
  }

  edit(opt: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(opt);
      return;
    }

    // Edit existing fruit
    const index = this.options.indexOf(opt);
    if (index >= 0) {
      this.options[index] = value;
    }
  }

  constructor(public a_services:AppServicesService){
    
  }

  formdetails = new FormGroup({
    n: new FormControl('', [Validators.required]),
    t: new FormControl('', [Validators.required]),
    req: new FormControl('', [Validators.required]),
  })

  create_table(){
    this.dets.push({
      name: this.formdetails.value['n'] as string,
      type: this.formdetails.value['t'] as string,
      required: this.formdetails.value['req'] as string,
      options: this.options
    });

    let d = this.dets.pop() as Details;
    if(d?.type != 'dropdown' && d?.type != 'radio')
    {
      d.options = ['NA'];
    }
    this.dets.push(d);
    this.options = [];

    this.a_services.setValue(this.dets);
  }

  generate_code()
  {
    this.a_services.temp = this.dets;
    this.a_services.flag = true;
  }
}
