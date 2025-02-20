import { icons } from '@/constants'
import { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native'
import * as Animatable from "react-native-animatable"
import { useVideoPlayer, VideoView } from 'expo-video'


const zoomIn = {
  0: {
    scale: 0.9
  },
  1: {
    scale: 1.1
  }
}

const zoomOut = {
  0: {
    scale: 1.1
  },
  1: {
    scale: 0.9
  }
}

const TrendingItem = ({ activeItem, item }) => {
  const player = useVideoPlayer("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", player => {
    player.loop = false
    player.play()
  })

  const [play, setPlay] = useState(false)

  return (
    <Animatable.View className='mr-5'
        animation={activeItem === item.$id ? zoomIn : zoomOut}
        duration={500}
    >
      {play ? (
        <VideoView style={styles.video} player={player} />
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
  const viewableItemsChanged = ({viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key)
    }
  }

  return (
   <FlatList 
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({item}) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      contentOffset={{x: 170}}
    horizontal
   />
  )
  
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default Trending