import { View, Text, Image } from 'react-native'
import {Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import "../../global.css"
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className='items-center justify-center gap-1 w-20'>
            <Image 
                source={icon}
                style={{width:20, height:20}} // Change these attributes to fix alignment
                resizeMode="contain"
                tintColor={color}
                className="w-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular' } text-xs`} style={{color: color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <StatusBar />
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarItemStyle: {
                    height:60
                },
                tabBarStyle: {
                    backgroundColor: '#161622',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    margin: 0,
                }
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title:"Home",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }} 
            />
            <Tabs.Screen
                name='bookmark'
                options={{
                    title:"Bookmark",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmark"
                            focused={focused}
                        />
                    )
                }} 
            />
            <Tabs.Screen
                name='create'
                options={{
                    title:"Create",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.plus}
                            color={color}
                            name="Create"
                            focused={focused}
                        />
                    )
                }} 
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title:"Profile",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }} 
            />
        </Tabs>
    </>
  )
}

export default TabsLayout