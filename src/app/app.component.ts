import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './Validators/noSpaceAllowed.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'forms';
  reactiveForm!:FormGroup

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      'firstname': new FormControl('', [Validators.required, CustomValidators.noSpaceAllowed]),
      'lastname': new FormControl('',[Validators.required, CustomValidators.noSpaceAllowed]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'username': new FormControl(''),
      'dob': new FormControl(''),
      'gender': new FormControl('male'),
      'address': new FormGroup(
        {'street': new FormControl('', [Validators.required]),
      'country': new FormControl('India', [Validators.required]),
      'city': new FormControl(''),
      'region': new FormControl(''),
      'postal': new FormControl('', [Validators.required]),
    }),
    'skills':new FormArray([
      new FormControl('')
    ]),

    'experience':new FormArray([
      
    ])
      
    })
  }
  OnFormSubmitted(){
    console.log(this.reactiveForm)
  }
AddSkills(){
  (<FormArray>this.reactiveForm.get('skills')).push(new FormControl('', [Validators.required]))
}
DeleteSkill(index:number){
  const controls = <FormArray>this.reactiveForm.get('skills');
  controls.removeAt(index)
}
addExp(){
  const frmgrp = new FormGroup({
    'company': new FormControl(''),
    'position': new FormControl(''),
    'totalExp': new FormControl(''),
    'start': new FormControl(''),
    'end': new FormControl('')
  });
  (<FormArray>this.reactiveForm.get('experience')).push(frmgrp)
}
DeleteExp(index:number){
  const controls = <FormArray>this.reactiveForm.get('experience');
  controls.removeAt(index)
}











  get firstname(){
    return this.reactiveForm.get('firstname')
  }
  get lastname(){
    return this.reactiveForm.get('lastname')
  }
  get email(){
    return this.reactiveForm.get('email')
  }
  get street(){
    return this.reactiveForm.get('address.street')
  }
  get country(){
    return this.reactiveForm.get('address.country')
  }
  get postal(){
    return this.reactiveForm.get('address.postal')
  }
  get skills(){
    return this.reactiveForm.get('skills')
  }
  
}
