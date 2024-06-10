
import React from 'react';
import { addToCart } from './actions';
import { useDispatch } from 'react-redux';

import { Text,View,Image,Button} from 'react-native';
import { log } from 'console';

const Product=(props) =>{
    const item=props.item
    const dispatch=useDispatch()

    const handleAddToCart =(item)=>{
        dispatch(addToCart(item))
    }
  return (
    <View style={{alignItems:'center' ,borderBottomWidth:2,
    borderBlockColor:'red',padding:10,marginBottom:50}}>
    <Text style={{fontSize:24}}>{item.name}</Text>
    <Text style={{fontSize:24}}>{item.color}</Text>
    <Text style={{fontSize:24}}>{item.price}</Text>
    <Image style={{width:200,height:200}} source={{uri:item.image}} />
    <Button title='Add to cart' onPress={()=>handleAddToCart(item)}/>
  </View>
  );
}


export default Product;
