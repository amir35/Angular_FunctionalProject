import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  contactForm = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl()
    })
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

}
