import { configureStore } from "@reduxjs/toolkit";
import { navbarTypes } from "../navbar/navbar.types";
import { navbarSlice } from "../navbar/navbar.slice";
import { audioVoiceSlice } from "../audiovoice/audiovoice.slice";
// export interface NavbarReducer {
//   navbar: navbarTypes;
// }
// const rootReducer = combineReducers<NavbarReducer>({
//   navbar:
// })
export const store = configureStore({
  reducer: {
    navbar: navbarSlice.reducer,
    audioVoice: audioVoiceSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
