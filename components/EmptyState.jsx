import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '../constants'

const EmptyState = ({title, subtitle}) => {
  return (
    <View className='w-full items-center justify-center'>
        <Image
            source={images.empty}
            className='w-[270px] h-[215px]'
            resizeMode='contain'
         />
         <Text className='font-pmedium text-sm text-gray-100'>
            {title}
        </Text>
        <Text className='text-xl font-psemibold text-white mt-2'>
             {subtitle}
        </Text>
    </View>
  )
}

export default EmptyState