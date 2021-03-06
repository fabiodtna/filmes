import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import {Header} from 'react-native-elements'

import api from './services/api';
import Filmes from './src/filmes'

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {

    async function loadFilmes(){

      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes()

  },[]);



  if(loading){
    return(
      <View style={{ alignItems:'center', justifyContent:'center', flex:1}}>
        <ActivityIndicator color="black" size={60} />
      </View>
    );
  }else{
     return ( 
    <View style={styles.container}>
      <Header
        backgroundColor="black"
        centerComponent={{ text: 'NETFRIX', style: {color: 'white',fontSize:22, fontWeight:'bold', padding:10}}}
      />
      <FlatList 
        data={filmes}
        keyExtractor={item => String(item.id) }
        renderItem={({item}) => <Filmes data={item}/> }
      />
    </View>
  );

}
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});
