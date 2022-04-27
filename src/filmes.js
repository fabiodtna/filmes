import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';

export default function Filmes({data}){

    const [ismodal, setIsmodal] = useState(false);

    return(
        <View style={style.container}>
            <Text
            style={style.nome}
            >{data.nome}</Text>
            
            <Image 
            style={style.foto}
            source={{uri: data.foto}}
            />

            <TouchableOpacity
            onPress={() => setIsmodal(true) }
            style={style.sobrearea}
            >
                <Text  style={style.sobre}>Sobre</Text>
            </TouchableOpacity>

            <Modal 
            animationType='fade'
            transparent={true}
            style={style.modal}
            visible={ismodal}
            >
                <View style={style.areamodal}>
                    <View style={style.areasobretxt}>
                        <Text style={style.nome}>{data.nome}</Text>
                        <Text style={style.sobretxt}>{data.sinopse}</Text>
                        <TouchableOpacity style={style.btnvoltar} onPress={() => setIsmodal(false) }>
                            <Text style={style.txtbtnvoltar}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                   
                </View>
            </Modal>
           
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'white'
    },
    nome:{
        padding:2,
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginTop:15
    },
    foto:{
        width:'95%',
        height:200,
        resizeMode: 'contain',
        borderRadius:10
    },
    sobrearea:{
        backgroundColor:'cyan',
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:40,
        borderBottomEndRadius:20,
        left:'38%',
        marginTop:-60,
        marginBottom:15

    },
    sobre:{
        padding:2,
        fontSize:15,
        fontWeight:'bold'
    },
    modal:{
        alignItems:'center',
        justifyContent:"center"
    },  
    areamodal:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end",
        alignItems:'center'
    },
    areasobretxt:{
        backgroundColor:"#cc0000",
        height:'45%',
        width:"90%",
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    sobretxt:{
        fontSize:16,
        fontStyle:'italic',
        margin:15,
        fontWeight:'bold'
    },
    btnvoltar:{
        backgroundColor:'white',
        width:70,
        height:30,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        left:'30%',
        marginBottom:'5%'
    },
    txtbtnvoltar:{
        fontSize:15,
        fontWeight:'bold'
    }
     
    
})