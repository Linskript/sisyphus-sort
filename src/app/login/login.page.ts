import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
regForm!: FormGroup;
  constructor(public formulario : FormBuilder) { 
  }

  ngOnInit() {
    this.regForm = this.formulario.group({
      nome :[' ', [Validators.required]],
      email :[' ', [Validators.required, Validators.email]],
      senha :[' ', [Validators.required]]
    })
  }

}
