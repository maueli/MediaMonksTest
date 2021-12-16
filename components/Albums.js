import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';

const  Albums=()=>{
    const styles = {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    }

    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => setAlbums(json) )
    },[]);

    const renderItem = ({item})=>{
        return(
            <Text style={{height:200}}> {item.title} </Text>
        )
    }


    return(
        <View style={styles.container}>
            <FlatList
                data={albums}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id} 
                initialNumToRender={5}
                windowSize={2}
                maxToRenderPerBatch={10}/>
        </View>
    )
}

export default Albums;
