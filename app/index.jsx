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
            <Image 
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
            />
            <Text className='text-3xl text-white font-bold text-center'>
              Discover endless possibilities with{" "}
              <Text className='text-secondary-200'>Aora</Text>
              <Image
              source={images.path} 
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
              />
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default index

