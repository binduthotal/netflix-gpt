import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"lang",
    initialState:{
        showLang:"en"
    },
    reducers:{
        changeLanguage: (state,action) => {
            state.showLang = action.payload
        }
    }
})

export const {changeLanguage} = langSlice.actions;
export default langSlice.reducer;