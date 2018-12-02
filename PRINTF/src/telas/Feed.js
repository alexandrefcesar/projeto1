import React, {Component} from 'react'
import {StyleSheet,FlatList,View} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'


class Feed extends Component{
    state ={
        posts:[{
            id: Math.random(),
            nickname:'Alexandre',
            email:'alexandre.f.cesar@gmail.com',
            image:require('../../assets/imgs/imagem.png'),
            comments:[{
                nickname:'John Ray Sheldon',
                comment:'Stunning'
            },{
                nickname:'Ediomara',
                comment:'cade a foto do tsuru?'

            }]
        
      },{
        id: Math.random(),
        nickname:'Centro de Informática',
        email:'ci@gmail.com',
        image:require('../../assets/imgs/imagem.png'),
        comments:[]
        }]
    }
  

    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item=> `${item.id}`}
                    renderItem={({item})=>
                        <Post key={item.id} {...item}/>}/>
            
            
            
            </View>


        )


    }

}

const styles=StyleSheet.create({

    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'

    }


})

export default Feed




        





