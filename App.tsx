
import React from 'react';

import { Text,View,Image,Button,ScrollView} from 'react-native';
import Product from './components/redux/Product';
import Header from './components/redux/Header';

function App() {
const products=[
  {
    name:"Samsung Mobile",
    color:"white",
    price:23000,
    image:"https://m.media-amazon.com/images/I/319NekMIBqL._SX300_SY300_QL70_FMwebp_.jpg"

  },
  {
    name:"Apple Iphone",
    color:"pink",
    price:123000,
    image:"https://static.vecteezy.com/system/resources/previews/030/769/558/original/new-pink-apple-iphone-15-smartphone-model-mockup-template-on-white-background-free-vector.jpg"

  },
  {
    name:"Xiaomi Mobile",
    color:"grey",
    price:13000,
    image:"https://m.media-amazon.com/images/I/319NekMIBqL._SX300_SY300_QL70_FMwebp_.jpg"

  },
  {
    name:"Fire-Boult Watch",
    color:"Yellow",
    price:1300,
    image:"https://m.media-amazon.com/images/I/712VGfMEouL._AC_UF1000,1000_QL80_.jpg"

  },
  {
    name:"Shoes",
    color:"Brown",
    price:5990,
    image:"https://www.shutterstock.com/image-photo/party-wear-black-formal-shoes-600nw-2171193413.jpg"

  },
  
 
]

  return (
     
    <View>
      <Header/>
      <ScrollView>
      {
        products.map((item)=><Product item={item}/>)
      }
        </ScrollView>
      

       </View>
     
  );
}


export default App;
