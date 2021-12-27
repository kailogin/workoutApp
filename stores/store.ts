import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const RootStore = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof RootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof RootStore.dispatch;
