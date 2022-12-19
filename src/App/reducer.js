import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getInfoUser } from "../services/User";

export const getUsers = createAsyncThunk('./detail', async(id) => {
    const res = await getInfoUser(id);
    return res;
});
export const profile = createSlice({
    name:'Show',
    initialState: {
        detail: {},
    },
    reducers:{
        
    },
    extraReducers:{
        [getUsers.fulfilled]: (state, actions) => {
            state.detail = actions.payload;
        },
    },
})
// export const {} = profile.actions
export default profile.reducer;

