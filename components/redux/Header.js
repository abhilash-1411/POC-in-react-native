
import React, { useEffect,useState } from 'react';

import { Text,View,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

const Header=() =>{
    const cartData = useSelector((state)=>state.reducer)
    const [cartItems,setCartItems]=useState(0)
    // console.warn(cartData);
    useEffect(()=>{
         if (cartData) { // Check if cartData is not undefined
        setCartItems(cartData.length);
    }
}, [cartData]);
 return (
    <View styles={styles.container}>
            <Text style={{fontSize:25,textAlign:'right',padding:10,
            backgroundColor:'orange'}}>
                <View style={{backgroundColor:'yellow',borderRadius:20,height:40,width:40}}>
                    <Text style={{fontSize:30}}>{cartItems}</Text>
                </View></Text></View>
  );
}

const styles=StyleSheet.create({
    container:{
   flex:1
    }
})


export default Header;
