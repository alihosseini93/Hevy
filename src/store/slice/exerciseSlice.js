import { createSlice } from '@reduxjs/toolkit'


const exerciseSlice = createSlice({
    name: 'exercise',
    initialState : {
        list: []
    },
    reducers: {
        setExercise: (state, { payload }) => {
           
            return{
            ...state ,
             list:[
                ...state.list , 
                {key : payload.id , title :payload.title , avatar : payload.avatar ,body: payload.body}
             ]
            }
              
        }
    }
})
// let { Fee, Title } = action.payload;
// return {
// ...state,
// products: [
// ...state.products,
// { key: Date.now(), Fee, Title }],

export const { setExercise } = exerciseSlice.actions

export default exerciseSlice.reducer