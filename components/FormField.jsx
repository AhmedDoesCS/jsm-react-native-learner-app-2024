import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className='text-base text-gray-100 font-pmedium '>{title}</Text>
      <View className='border-2 border-black rounded-2xl focus:border-secondary items-center w-full h-16 px-4 bg-black-100'>
        <TextInput
            className='flex-1 text-white font-psemibold text-base' 
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title==='Password' && !showPassword}
        />
      </View>
    </View>
  )
}

export default FormField