import { icons } from '@/constants'
import { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native'
import * as Animatable from "react-native-animatable"

const zoomIn = {
  0: {
    scale: 0.9
  },
  1: {
    scale: 1
  }
}

const zoomOut = {
  0: {
    scale: 1
  },
  1: {
    scale: 0.9
  }
}

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false)

  return (
    <Animatable.View className='mr-5'
        animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
        duration={500}
    >
      {play ? (
        <Text className='text-white'>
          Playing
        </Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setPlay(true)
          }}
          className='relative justify-center items-center'>
            <ImageBackground 
              source= {{
                uri: item.thumbnail
              }}
              className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'
              resizeMode='cover'
            />
            <Image
              source={icons.play}
              className='w-14 h-14 absolute'
              resizeMode='contain'
             />
        </TouchableOpacity>
      )}
    </Animatable.View>
  )
}

const Trending = ({posts}) => {
  const [activeItem, setActiveItem] = useState(posts[0])

  return (
   <FlatList 
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({item}) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
    horizontal
   />
  )
}

export default Trending