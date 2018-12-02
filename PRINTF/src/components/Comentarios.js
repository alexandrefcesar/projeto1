import React,{Component} from 'react'
import{View,Text,StyleSheet,Dimensions,Alert} from 'react-native'

class Comentarios extends Component{
    render(){
        let view =null
        if(this.props.comentarios){
            view = this.props.comentarios.map((item,index)=>{
                return(
                    <View style = {styles.comentariosContainer} key={index}>
                        <Text style = {styles.nickname}>{item.nickname} </Text>
                        <Text style= {styles.comentario}>{item.comentario}</Text>
                    
                    
                    </View>

                )
 
            })
        }

    return (
        <View style = {styles.container}>
            {view}
        
        </View>

    )


    }

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        margin:10       
},
    comentariosContainer:{
        flexDirection: 'row',
        marginTop:5,
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#517dbe'
    },
    comentario:{
        color: '#000000'
    }
})

export default Comentarios