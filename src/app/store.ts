import { configureStore } from "@reduxjs/toolkit";
import serviceDataReducer from './form1Slice'
import  personDataReducer  from "./form2Slice";

export const store = configureStore({
    reducer: {
        personInfo: personDataReducer,
        serviceData: serviceDataReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch