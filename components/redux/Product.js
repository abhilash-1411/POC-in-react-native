
import React, { useEffect, useState } from 'react';
import { addToCart ,removeFromCart} from './actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Text,View,Image,Button} from 'react-native';
import { log } from 'console';

const Product=(props) =>{
    const [isAdded,setIsAdded]=useState(false)
    const item=props.item
    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>{state.reducer})

    const handleAddToCart =(item)=>{
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart =(item)=>{
   dispatch(removeFromCart(item.name))

    }
    useEffect(() => {
        if(cartItems){
        let result=cartItems.filter((element)=>{
            return element.name==item.name
        })
    
        if(result.length){
            setIsAdded(true);
        }else{
            setIsAdded(false);
        }
    }
    },[cartItems])

  return (
    <View style={{alignItems:'center' ,borderBottomWidth:2,
    borderBlockColor:'red',padding:10,marginBottom:50}}>
    <Text style={{fontSize:24}}>{item.name}</Text>
    <Text style={{fontSize:24}}>{item.color}</Text>
    <Text style={{fontSize:24}}>{item.price}</Text>
    <Image style={{width:200,height:200}} source={{uri:item.image}} />
    {
        isAdded ? <Button title='Remove From cart' onPress={()=>handleRemoveFromCart(item)}/>
        :
        <Button title='Add to cart' onPress={()=>handleAddToCart(item)}/>
    }
    
  </View>
  );
};

export default Product;
