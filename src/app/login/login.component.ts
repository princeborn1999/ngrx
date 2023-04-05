import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../login.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  account: string = '';
  password: string = '';
  error: string = '';
  constructor(
    private router: Router,
    private store: Store<any>
  ){

  }
  ngOnInit(): void {
    const loginSuccessful: boolean = true
  }
  onSubmit() {
    this.store.dispatch(
      login({account: this.account, password: this.password})
    );
    // this.store.select(state => state.auth.error).subscribe(error => ( this.error = error));
    // if (loginSuccessful) {
    //   this.router.navigate(['/home']);
    // }
  }
}
