import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //listAlbums : [],
    //listPhotos : [],
    //isFetchedAlbums : false,
    //isFetchedPhotos : false,
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
        /*addListAlbums:(state,action)=>{
            state.listAlbums = action.payload;
        },*/
        /*addListPhotos:(state,action)=>{
            return {
                ...state,
                listPhotos: action.payload
            }
        },
        addListAlbums:(state,action)=>{
            return {
                ...state,
                listAlbums: action.payload
            }
        },
        fetchedAlbums:(state,action)=>{
            state.isFetchedAlbums = true
        },
        fetchedPhotos:(state,action)=>{
            state.isFetchedAlbums = true
        },*/
        addList:(state,action)=>{
            console.log(action.payload)
            const item = state.info.find( e =>{
                return e.type == action.payload.type
            });
            console.log("Item:" + item);
            item.list = action.payload.list;
            item.isFetched = true;
        }
        /*addAllImages:(state,action)=>{
          state.allImages = [...state.allImages, action.payload]
        },*/
    }
})

// Action creators are generated for each case reducer function
export const { addList  } = Info.actions

export default Info.reducer

// addListAlbums, addListPhotos, fetchedAlbums, fetchedPhotos,