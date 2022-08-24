import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import {audiovoiceTypes} from "./audiovoice.types"
import type { RootState } from "../store/store";


const initialState:audiovoiceTypes={
url:""
}
export const audioVoiceSlice = createSlice({
  name: 'audiovoice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    playAudio: (state,action) => {
        state.url= action.payload;
    },
  },
})

export const { playAudio } = audioVoiceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const audioVoice = (state: RootState) => state.audioVoice.url;

export default audioVoiceSlice.reducer