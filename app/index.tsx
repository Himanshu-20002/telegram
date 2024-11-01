import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { splashStyles } from '@/styles/splashStyles'
import { router } from 'expo-router'
import { resetAndNavigate } from '@/utils/LibraryHelpers'

const index = () => {
  useEffect(()=>{
   setTimeout(()=>{
    resetAndNavigate("/(auth)/Signin")
   },2000)
   
  },[])
  return (
    <View style={splashStyles.container}>
      <Image source={require("../assets/images/adaptive-icon.png")} style={splashStyles.logo}/>
      
     
    </View>
  )
}

export default index