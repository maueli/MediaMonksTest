import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    uid:[],
    mail:[],
    pass:[],
    name:[],
    isLogged:false,
    isProductor:false,
    coordinates:[],
    disponible:false,
    stopLoc:[]
}


const Log = createSlice({
    name: 'log',
    initialState,
    reducers: {
        logUid:(state,action)=>{
          state.uid = action.payload;
        },
        logData:(state,action)=>{
          //console.log("LogSlice:" + action.payload.mail)
          state.mail = action.payload.mail;
          state.pass = action.payload.pass;
        },
        logDataName:(state,action)=>{
            state.name = action.payload;
        },
        logStatus:(state,action)=>{
            return {
                ...state,
                isLogged: action.payload
            }
        },
        dispoCoordinates:(state,action)=>{
            return {
                ...state,
                coordinates: action.payload
            }
        },
        disponibilidad:(state,action)=>{
            return {
                ...state,
                disponible: action.payload
            }
        },
        isProductor:(state,action)=>{
            state.isProductor = action.payload;
        },
        StopLoc:(state,action)=>{
            state.stopLoc = action.payload;
        }
        /*addAllImages:(state,action)=>{
          state.allImages = [...state.allImages, action.payload]
        },*/
    }
})

// Action creators are generated for each case reducer function
export const { logUid, logData, logDataName, logStatus, dispoCoordinates, disponibilidad, isProductor, StopLoc } = Log.actions

export default Log.reducer