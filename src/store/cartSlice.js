import{createSlice}from"@reduxjs/toolkit";const initial=JSON.parse(localStorage.getItem("shop-cart")||"[]");
const slice=createSlice({name:"cart",initialState:initial,reducers:{addToCart:(s,a)=>{const x=s.find(p=>p.id===a.payload.id);
    x?x.quantity++:s.push({...a.payload,quantity:1})},removeFromCart:(s,a)=>s.filter(x=>x.id!==a.payload),
    increaseQuantity:(s,a)=>{const x=s.find(p=>p.id===a.payload);if(x)x.quantity++},decreaseQuantity:
    (s,a)=>{const x=s.find(p=>p.id===a.payload);if(x&&x.quantity>1)x.quantity--},clearCart:()=>[]}});
    export const{addToCart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart}=slice.actions;export default slice.reducer;
    