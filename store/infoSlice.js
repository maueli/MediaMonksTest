import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listAlbums : [],
    listPhotos : []
}


const Info = createSlice({
    name: 'info',
    initialState,
    reducers: {
        addListAlbums:(state,action)=>{
            state.listAlbums = action.payload;
        },
        addListPhotos:(state,action)=>{
            return {
                ...state,
                isLogged: action.payload
            }
        },
        /*addAllImages:(state,action)=>{
          state.allImages = [...state.allImages, action.payload]
        },*/
    }
})

// Action creators are generated for each case reducer function
export const {addListAlbums, addListPhotos  } = Info.actions

export default Info.reducer