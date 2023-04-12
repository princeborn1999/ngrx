
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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

class FirstStore extends Subject<Action> {}

const firstStore = new FirstStore();
firstStore.subscribe(res=>{console.log('sotre1',res)})
firstStore.subscribe(res=>{console.log('sotre2',res)})

firstStore.next({ type: 'Action1' });

firstStore.subscribe(res=>{console.log('store3',res)})


class SecondStore extends BehaviorSubject<Action>{
  constructor(initialState: any){
    super(initialState)
  }
}

const secondStore = new SecondStore('initial State');

secondStore.subscribe(res=>{console.log('sotre4',res)})
secondStore.subscribe(res=>{console.log('sotre5',res)})

secondStore.next({ type: 'Action2'})

secondStore.subscribe(res=>{console.log('sotre6',res)})
