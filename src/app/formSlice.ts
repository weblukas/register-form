import { createSlice } from '@reduxjs/toolkit';

interface formData {
    firstAndLastName: string;
        emailAddress: string;
        phoneNumber: string;
        gender: string; 
}

const initialState: formData = {
        firstAndLastName: '',
        emailAddress: '',
        phoneNumber: '',
        gender: '',
    }


const formSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
       updateName: (state, action) => {state.firstAndLastName = action.payload},
       updateEmailAddress: (state, action) => {state.emailAddress = action.payload},
       updatePhoneNumber: (state, action) => {state.phoneNumber = action.payload},
       updateGender: (state, action) => {state.gender = action.payload},
    }
})

export const { updateName, updateEmailAddress, updatePhoneNumber, updateGender} = formSlice.actions
export default formSlice.reducer;