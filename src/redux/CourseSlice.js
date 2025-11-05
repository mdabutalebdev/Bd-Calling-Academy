const { createSlice } = require("@reduxjs/toolkit");


export const courseSlice = createSlice({
    name:"course",
    initialState:{
       courses: [],
       loading: true,
       error:null,
    },
    reducers:{

    },
    extraReducers:{

    }
})

export default courseSlice.reducer