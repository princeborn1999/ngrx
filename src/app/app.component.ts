import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';

interface Action {
  type: string;
  payload?: any
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx';

  ngOnInit(): void {
    this.get()
  }
  get(){

  }
  add(){

  }
}

class Dispatcher extends Subject<Action> {
  dispatch(action: Action) {
    this.next(action);
  }
}

const dispatcher = new Dispatcher();
const sub1 = dispatcher.subscribe(res => console.log('sub1',res))
const sub2 = dispatcher.subscribe(res => console.log('sub2',res))

dispatcher.dispatch({type: 'Action1'})
dispatcher.dispatch({type: 'Action2'})
