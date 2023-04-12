import { Injectable } from "@angular/core";
import { PostsService } from "../service/posts.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PostsActions from './action';
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) { }

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.getPosts),
      mergeMap(() => {
        return this.postsService.getPosts().pipe(
          map((posts) => PostsActions.getPostSuccess({ posts })),
          catchError((error) => of(PostsActions.getPostFailure({ error: error.message })))
        )
      })
    )
  )
}
