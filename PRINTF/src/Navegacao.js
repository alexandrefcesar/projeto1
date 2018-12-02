import React from 'react'
import {View, StyleSheet, createBottomTabNavigator,Image, TabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Feed from './telas/Feed'



const MenuRotas={
   
    Add:{
        name:'AddPhoto',
        screen: Feed,
        navigationOptions:{
           
            title:'Add Picture',
            tabBarIcon:({tintColor})=>
            <Icon name='ios-add' size={30} color={tintColor}/>
            


        }
       
       
      

    }, Feed:{
        name:'Feed',
        screen:Feed,
        navigationOptions:{
            title:'Feed',
            tabBarIcon:({ tintColor})=>
            <Icon name='ios-home' size={30} color={tintColor}/>
  
        }

    },
    Profile:{
        name:'Configuração',
        screen: Feed,
        navigationOptions:{
            title:'Configuração',
            tabBarLabel:'Configuração',
            tabBarIcon:({tintColor})=>
            <Icon name='ios-settings' size={30} color={tintColor}/>
          
        }

    }
}

const MenuConfig={
    initalRouteName:'Feed',
    tabBarOptions:{
        showLabel:false,
    }
}


const MenuNavigator = createBottomTabNavigator(MenuRotas,MenuConfig)
export default MenuNavigator

