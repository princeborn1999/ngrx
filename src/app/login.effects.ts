import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { login } from "./login.actions";
import { AuthServiceService } from "src/services/auth-service.service";

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthServiceService
    ) {
   }
  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(login), // Filter actions by type
    tap(() => console.log('login!'))
  )
 );
}
