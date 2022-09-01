import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
const exerciseSlice = createSlice({
    name : 'listExercise',
    initialState : {
        list :[]
    },
    reduser  :{
        setExercise : (state , {payload}) =>{
           console.log(payload);
        }
    }
})


export const {setExercise} = exerciseSlice.actions
export default exerciseSlice.reducer