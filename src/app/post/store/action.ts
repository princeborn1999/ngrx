import { createAction, props } from "@ngrx/store";
import { PostInterface } from "../type/post.interface";


export const getPosts = createAction('[Posts] Get Posts');
export const getPostSuccess = createAction(
  '[Posts] Get Posts success',
  props<{posts: PostInterface[]}>()
)

export const getPostFailure = createAction(
  '[Posts] Get Posts failure',
  props<{error: string}>()
)
