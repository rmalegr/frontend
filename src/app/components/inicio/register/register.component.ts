import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: FormGroup;
  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword });
  }
  registrarUsuario(): void {
    console.log(this.register)
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const checkPassword = group.controls['confirmPassword'].value;
    return pass === checkPassword ? null : {notSame : true} 
  }
}
