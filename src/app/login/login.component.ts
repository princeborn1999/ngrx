import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(
    private router: Router,
  ){

  }
  onSubmit() {
    const loginSuccessful: boolean = true
    if (loginSuccessful) {
      this.router.navigate(['/home']);
    }
  }
}
