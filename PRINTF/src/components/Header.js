import React, { Component } from 'react'
import {StyleSheet,Text,View,Platform,Image} from 'react-native'
import icon from '../../assets/imgs/logo2.png'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
    
    
                
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title} > CibooK </Text>
                    <Text style={styles.title} > </Text>
                    
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 11,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        
        backgroundColor: '#303030',
        //backgroundColor: '#2f3437',               //'#565656',
        //backgroundColor: 'darkslategray',
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent:'space-between',
        paddingHorizontal:5
    },
    rowContainerImage:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
      
    },
    title: {
        color: '#f9f9f9',
        fontFamily: 'VINCHAND',
        height: 30,
        fontSize: 26
    }
})

export default Header
