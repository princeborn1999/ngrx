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
  ngOnInit(): void {

  }

}
