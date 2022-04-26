import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { country } from '../country';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  constructor() {
   }

   contact: Contact;

  ngOnInit() {
 
    this.contact= {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2"
    };
 
  }

  
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  /*
  onSubmit(contactForm : any){
    console.log(contactForm.value);
  }
  */

  
  onSubmit(contactForm) {
    console.log(this.contact);
  }

  setDefaults() {
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2"
    };
  }

  changeCountry() {
    this.contact.country = "1";
  }
 
  reset(contactForm :NgForm) {
    contactForm.resetForm();
  }

}
