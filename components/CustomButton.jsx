import { TouchableOpacity, Text } from 'react-native'

import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}>
      <Text className={`text-primary font-psemibold text-lg`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton