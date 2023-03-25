import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment , decrement, reset } from 'src/app/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number> // constructor先宣告才不會報錯

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
    // TODO: Connect `this.count$` stream to the current store `count` state
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
