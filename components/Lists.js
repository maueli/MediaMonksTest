import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import HeaderList from './HeaderList';

const  Lists = ({route})=>{
    const { listContent } = route.params;
    const styles = {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            width:"100%"
        }
    }

    const [list,setList] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${listContent.toLowerCase()}`)
            .then(response => response.json())
            .then(json => setList(json) )
    },[]);

    const renderItem = ({item})=>{
        const styles2 = {
            container:{
                justifyContent:"center",
                alignItems:"center",
                padding:20,
            },
            container2:{
                width:"80%",
                height:120,
                borderRadius:10,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"gray",
                padding:20
            },
            text:{
                color:"white"
            }
        }
        return(
            <View style={styles2.container}>
                <View style={styles2.container2}>
                    <Text style={styles2.text} > {item.title} </Text>
                </View>
            </View>
        )
    }

// contentContainerStyle={{ alignItems:"center"}}
    return(
        <View style={styles.container}>
            <HeaderList title={listContent} />
            <FlatList
                style={{width:"100%"}}
                data={list}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id} 
                initialNumToRender={5}
                windowSize={2}
                maxToRenderPerBatch={10}/>
        </View>
    )
}

export default Lists;
