import {  Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <View className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <Text className='text-3xl font-pblack'>Welcome!</Text>
      <Link href="/profile">Go to profile.</Link>
    </View>
  )
}

export default index

