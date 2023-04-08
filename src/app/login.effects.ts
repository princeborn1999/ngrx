import { login } from './login.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthServiceService } from 'src/services/auth-service.service';
@Injectable()

export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      tap(result => console.log('asdasd'))
    )
  )
  constructor(
    private actions$: Actions,
    private authService: AuthServiceService
  ){

  }
}
