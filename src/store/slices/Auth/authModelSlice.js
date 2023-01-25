import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isOpenLoginModel: false,
    isOpenForgotModel: false,
    isOpenEmailSendModel: false
}


export const authModelSlice = createSlice({

name: "authModelSlice",
initialState,
reducers:{
    loginModelStatus: (state, action)=>{
        state.isOpenLoginModel = action.payload.status;
        document.body.classList.add('modal_open');

    },
    forgotModelStatus: (state, action)=>{
        state.isOpenForgotModel = action.payload.status
    },
    emailSendModelStatus: (state, action)=>{
        state.isOpenEmailSendModel = action.payload.status
    }
}
})

export const {loginModelStatus, forgotModelStatus, emailSendModelStatus} = authModelSlice.actions

export default authModelSlice.reducer