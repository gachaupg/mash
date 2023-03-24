import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import  y  from "../assets/y.jpeg";
import * as Animatable from "react-native-animatable";
import { useSelector } from 'react-redux';
import LoadingScreen from './Registerauth';
import SelectDropdown from 'react-native-select-dropdown'

const getLocalStorage = () => {

 

  let user = localStorage.getItem('user');
  if (user) {
    return (user = JSON.parse(localStorage.getItem('user')));
  } else {
    return user;
  }
};
const food = ["Egypt", "Canada", "Australia", "Ireland"]
const Home = () => {
    const navigation=useNavigation()
    useLayoutEffect(()=>{
navigation.setOptions({
    headerShown:false,

})
    },[])

    const detectLogin= async ()=>{
          const token = await AsyncStorage.getItem('token')
              if(token){
                    props.navigation.replace("Home")
              }else{
                  props.navigation.replace("Login")
              }
        }
        useEffect(()=>{
         detectLogin()
        },[])


    // const [user, setUser] = useState(getLocalStorage(null));
    // useEffect(() => {
    //   localStorage.setItem('user', JSON.stringify(user));
    // }, [user]);

  return (
    <SafeAreaView className='flex-1 relative'>
      <View style={styles.loading}> 
   </View>
        {/* top section */}
      <View className='flex-row px-6 mt-8
       items-center space-x-2'>  
        <View className='w-16 h-16 bg-black rounded-full justify-center'> 
           <Text className='items-center ml-4
           text-3xl text-green-600 font-semibold'>Go</Text> 
        </View> 
        <Text className='text-3xl'  >Travel</Text>
      </View>

      {/* body */}
      <View className="px-6 mt-5 space-y-3">
        <Text className="text-[#3C6072] text-[30px]">Enjoy our meals</Text>
        <Text className="text-[#00BCC9] text-[27px] font-bold">
          Meals
        </Text>
        <SelectDropdown
	data={food}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
        <Text className="text-[#3C6072] text-base mb-7">
          
        </Text>
      </View>

      {/* Circle Section */}
      {/* <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View> */}
      {/* <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View> */}

      {/* Image container */}
      <View className="mt-4 flex-1 relative items-center justify-center">
    
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={y}
          className="w-full h-full object-cover mt-25"
          style={{marginTop:'3rem'}} 
        />

        <TouchableOpacity
          onPress={()=>props.navigation.replace("Discover")}
          className="absolute bottom-20 w-44 h-44 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-44 h-44 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Explore  our rooms</Text>
          </Animatable.View>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20,
        
      }}
      onPress={()=>props.navigation.replace("Discover")}
      >dont have a account ?</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({})