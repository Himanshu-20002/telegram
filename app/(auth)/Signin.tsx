import { View, Text } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import LottieView from 'lottie-react-native'
import { siginStyles, } from '../../styles/signinStyles'
const Signin = () => {
  return (          
    <CustomSafeAreaView style={siginStyles.container}>
      <LottieView
       source={require("../../assets/animations/telegram.json")} 
       style={siginStyles.animation}
       autoPlay
       loop
       />
    </CustomSafeAreaView>
  )
}

export default Signin