import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';

const Photos =()=>{
    const styles = {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    }

    const [photos,setPhotos] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setPhotos(json) )
    },[]);

    const renderItem = ({item})=>{
        return(
            <Text style={{height:200}}> {item.title} </Text>
        )
    }


    return(
        <View style={styles.container}>
            <FlatList
                data={photos}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id} 
                initialNumToRender={5}
                windowSize={2}
                maxToRenderPerBatch={10}/>
        </View>
    )
}

export default Photos;

/**
 *                 onEndReached={({distanceFromEnd})=>{
                    if(distanceFromEnd==10){
                        alert("a")
                    }
                }} 
                onEndReachedThreshold={1}removeClippedSubviews={false}
 */