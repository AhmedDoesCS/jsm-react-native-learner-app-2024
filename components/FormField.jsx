import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants'
import React, {useState} from 'react'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className='text-base text-gray-100 font-pmedium '>{title}</Text>
      <View className='border-2 border-black-200 rounded-2xl focus:border-secondary items-center w-full h-16 px-4 bg-black-100 flex-row '>
        <TextInput
            className='flex-1 text-white font-psemibold text-base' 
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title==='Password' && !showPassword}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={() => {
                setShowPassword(!showPassword)
            }}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide}
                className='w-6 h-6'
                resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField