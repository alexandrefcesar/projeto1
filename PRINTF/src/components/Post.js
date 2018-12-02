import React, {Component} from 'react'
import {StyleSheet, View,Image,Dimensions} from 'react-native'
import Usuario from './Usuario'
import Comentarios from './Comentarios'
import AdicionarComentario from './AdicionarComentario'
class Post extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Usuario email= {this.props.email} nickname={this.props.nickname}/>
                <Image source= {this.props.image} style={styles.image}/>
                <Comentarios comentarios={this.props.comentarios}/>
                <AdicionarComentario/>
            </View>           
        )

    }

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:5,
        flex:1,
        backgroundColor: '#f2f2f2'


    },
    image:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width *1/2,
        resizeMode: 'contain'

    }

})

export default Post