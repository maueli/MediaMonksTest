import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info : [
        {
            type:"albums",
            isFetched: false,
            list: []
        },
        {
            type:"photos",
            isFetched: false,
            list: []
        },
    ]
}


const Info = createSlice({
    name: 'info',
    initialState,
    reducers: {
        addList:(state,action)=>{
            const item = state.info.find( e =>{
                return e.type == action.payload.type
            });
            
            item.list = action.payload.list;
            item.isFetched = true;
        }
    }
})

export const { addList  } = Info.actions

export default Info.reducer