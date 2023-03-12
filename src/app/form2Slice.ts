import { createSlice } from '@reduxjs/toolkit';

interface personData {
    firstAndLastName: string;
        emailAddress: string;
        phoneNumber: string;
        gender: string; 
        files: string[]
}

const initialState: personData = {
        firstAndLastName: '',
        emailAddress: '',
        phoneNumber: '',
        gender: '',
        files: []
    }


const form2Slice = createSlice({
    name: 'personData',
    initialState,
    reducers: {
       updateName: (state, action) => {state.firstAndLastName = action.payload},
       updateEmailAddress: (state, action) => {state.emailAddress = action.payload},
       updatePhoneNumber: (state, action) => {state.phoneNumber = action.payload},
       updateGender: (state, action) => {state.gender = action.payload},
       updateFiles: (state, action) => {state.files = action.payload},
    }
})

export const { updateName, updateEmailAddress, updatePhoneNumber, updateGender, updateFiles} = form2Slice.actions
export default form2Slice.reducer;