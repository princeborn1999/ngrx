import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, postSelector } from 'src/app/post/store/selector';
import { PostInterface } from 'src/app/post/type/post.interface';
import { AppStateInterface } from 'src/app/type/appState.interface';
import * as PostsActions from "src/app/post/store/action";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  count: number = 0;
  isLoading$?: Observable<boolean>;
  error$?: Observable<string | null>;
  posts$?: Observable<PostInterface[]>;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.posts$ = this.store.select(postSelector);
  }

  ngOnInit(): void {
    this.store.subscribe(data => console.log(data))
    this.isLoading$?.subscribe(res => console.log('isLoading$', res))
    this.posts$?.subscribe(res => console.log('posts$', res))
    this.store.dispatch(PostsActions.getPosts());
  }

  dispatch() {
    this.count++;
    this.store.dispatch(
      PostsActions.getPostSuccess({ posts: [{ id: this.count, title: `標題${this.count}` }] }))
  }



}
