import {  Text, View, ScrollView, Image } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import {images} from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <View>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView contentContainerStyle = {{height:'100%'}}>
          <View className='w-full justify-center items-center h-full px-4'>
            <Image
            source={images.logo} 
            className='w-[130px] h-[84px]'
            resizeMode='contain'
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default index

