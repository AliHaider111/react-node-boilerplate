import { configureStore } from "@reduxjs/toolkit";
import authModelSlice from "./slices/Auth/authModelSlice";
import authSlice from "./slices/Auth/authSlice";
import loaderSlice  from "./slices/components/Loader";


export const store =configureStore({
    reducer:{
        authSlice: authSlice,
        authModelSlice: authModelSlice,
        loader: loaderSlice
    }
})