import { createReducer, on } from "@ngrx/store";
import { PostStateInterface } from "../type/postState.interface";
import * as PostsActions from "./action";



export const initailState: PostStateInterface = {
  isLoading: false,
  posts: [],
  error: null
}

export const reducers = createReducer(
  initailState,
  on(PostsActions.getPosts, (state)=>({...state, isLoading: true})),
  on(PostsActions.getPostSuccess, (state,action)=>({
    ...state,
    isLoading: false,
    posts: action.posts
  })),
  on(PostsActions.getPostFailure, (state,action)=> ({
    ...state,
    isLoading: false,
    error: action.error
  }))
)
