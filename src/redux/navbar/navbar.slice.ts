import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import {navbarTypes} from "./navbar.types"
import type { RootState } from "../store/store";


const initialState:navbarTypes={
    openDropDown:false
}
export const navbarSlice = createSlice({
  name: 'navbar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openPopOut: (state) => {
      state.openDropDown = !state.openDropDown;
    },
  },
})

export const { openPopOut } = navbarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.navbar.openDropDown;

export default navbarSlice.reducer