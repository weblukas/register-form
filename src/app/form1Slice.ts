import { createSlice } from '@reduxjs/toolkit';

interface serviceData {
    service: string;
}

const initialState: serviceData = {
    service: 'corporate-services'
}

const form1Slice = createSlice({
    name: 'serviceData',
    initialState,
    reducers: {
        chooseService: (state, action) => {state.service = action.payload}
    }
})

export const { chooseService} = form1Slice.actions
export default form1Slice.reducer