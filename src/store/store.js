import { configureStore, createSlice } from '@reduxjs/toolkit';


let cart = createSlice({
    name : 'cart',
    initialState : [],
    reducers: {
        addCart(state, action){
            let newData = action.payload.data;
            let newCart = {
                id : newData.id,
                title : newData.title,
                price : newData.price,
                count : action.payload.amount
            }

            let index = state.findIndex((a)=> a.id == newData.id);
            if (index == -1 ){
                state.push(newCart);
            } else {
                state[index].count += action.payload.amount;
            }
        },
        upCount(state, action){
            let index = state.findIndex((a)=> a.id == action.payload);
            state[index].count++;
        },
        downCount(state, action){
            let index = state.findIndex((a)=> a.id == action.payload);
            if(state[index].count > 1){
                state[index].count--;
            }
        },
        delCart(state, action){
            let index = state.findIndex((a)=> a.id == action.payload);
            state.splice(index, 1);
        }
    }
})


let buyItem = createSlice({
    name : 'buyItem',
    initialState : {
        title : '',
        price : '',
        count : ''
    },
    reducers : {
        Info(state, action){
            let newData = action.payload.data;
            state.title = newData.title;
            state.price = newData.price;
            state.count = action.payload.amount;
        }
    }
})

export let { Info } = buyItem.actions;

export let { checkAmount, addCart, upCount, downCount, delCart } = cart.actions;

export default configureStore({
    reducer:{
        cart : cart.reducer,
        buyItem : buyItem.reducer
    }
})