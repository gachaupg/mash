import { Dimensions,TouchableOpacity, StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import { Button ,TextInput} from 'react-native-paper';

const width=Dimensions.get('window').width-20

const Products  = () => {
    function compare(a,b){
        if(a._id <b._id){
          return 1
        }
        if(a._id >b._id){
          return -1
        }return 0
      }
    const [users,setUsers]=useState([]);
    const excerpt = (str) => {
      if (str.length > 45) {
        str = str.substring(0, 45) + " ...";
      }
      return str;
    };
    const data= [
      {
        rooomo:1,
        maxipeople:5,
        img:'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=400',
        price:700,
        desc:'Facilities include 24-hour room service, Wi-Fi access, LCD TV in the rooms, restaurant, snack-bar, business area, fitness centre with sauna and private parking.'
      },
      {
        rooomo:1,
        maxipeople:5,
        img:'https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=400',
        price:700,
        desc:'Facilities include 24-hour room service, Wi-Fi access, LCD TV in the rooms, restaurant, snack-bar, business area, fitness centre with sauna and private parking.'
      },
      {
        rooomo:1,
        maxipeople:5,
        img:'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=400',
        price:700,
        desc:'Facilities include 24-hour room service, Wi-Fi access, LCD TV in the rooms, restaurant, snack-bar, business area, fitness centre with sauna and private parking.'
      },
      {
        rooomo:1,
        maxipeople:5,
        img:'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=400',
        price:700,
        desc:'Facilities include 24-hour room service, Wi-Fi access, LCD TV in the rooms, restaurant, snack-bar, business area, fitness centre with sauna and private parking.'
      },
    ]

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('https://g-d0sm.onrender.com/tour')
          res.data.sort(compare)
        setUsers(  res.data)
        console.log('data',users);
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

  return (

    <>
    <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20
      }}
      onPress={()=>props.navigation.replace("Home")}
      >Back Home</Text>
      </TouchableOpacity>
   
    <View>
    <Text style={{
        textAlign:'center',
        fontSize:'1.4rem',
      }}>Our Rooms </Text>
    <View style={styles.Container}>
      {data.map((item)=>{
        return(
            <View style={styles.card}>
                <Text style={styles.text}>
                    {item.rooomo}

                </Text>
                <Image
                  key={item._id}
                  resizeMode="contain"
                  source={{uri: item.img}}
                  style={styles.banner}
                />
                <Text style={styles.text}>
                 max No of people:   {item.maxipeople}

                </Text>
                <Text style={styles.text}>
                    {excerpt(item.desc) }

                </Text>
                <TouchableOpacity>
        <Button
      style={styles.book} 
      onPress={()=>props.navigation.replace("Book")}
      >Book</Button>
      </TouchableOpacity>
              
            </View>
        )
      })}
    </View>
   
    </View>
     </>
  )
}

export default Products 

const styles = StyleSheet.create({
    Container:{
        marginTop:'3rem',
        width:width,
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        gap:'2rem'
    },
    banner: {
        height: 150,
        width: 150,
        borderRadius: 10,
        marginHorizontal: 20,
        objectFit:'cover'
      },

      text:{
        textAlign:'center'
      },
      card:{
        width:'90%',
        display:'flex',
        alignItems:'center',
        backgroundColor:'#fdfbfb',
        height:'24rem',
        gap:'1rem',
        borderRadius:'1rem',
        paddingLeft:'1rem'
        
      },
      book:{
        backgroundColor:'blue',
        width: 150,
        marginBottom:12
      }
})