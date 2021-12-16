import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import HeaderList from './HeaderList';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../store/infoSlice';

const  Lists = ({route})=>{
    
    const { listContent } = route.params;
    const dispatch = useDispatch();
    const info = useSelector( state => state.info.info)

    //



    const styles = {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            width:"100%"
        }
    }

    const [list,setList] = useState([]);
    const [load,setLoad] = useState(true);



    useEffect(()=>{

        // Find object ( Photos / Albums )
        const listRedux = info.find( e =>{
            return e.type == listContent.toLowerCase();
        });

        // Check if is fetched
        const isFetched = listRedux.isFetched;

        // Take the list
        const list2 = listRedux.list;

        if(isFetched){
            // Fetched => just setList
            setList(list2);
            setLoad(false);
        }
        else{
            // Fetch info and setList, and store in persistance
            fetch(`https://jsonplaceholder.typicode.com/${listContent.toLowerCase()}`)
                .then(response => response.json())
                .then(json => {
                    setList(json);
                    setLoad(false);
                    const preInfo = {
                        type: listContent.toLowerCase(),
                        list: json
                    }
                    dispatch( addList(preInfo) );
                })
        }

    },[]);

    const renderItem = ({item})=>{
        const styles2 = {
            container:{
                justifyContent:"center",
                alignItems:"center",
                padding:20,
            },
            container2:{
                width:"90%",
                //height:120,
                borderRadius:10,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"gray",
                padding:0,
                overflow:"hidden"
            },
            text:{
                color:"white",
                padding:20
            }
        }

        const Photos = ()=>{
            if(listContent=="Photos"){
                return <Item item={item} />
            }
            else{
                return null
            }
        }

        return(
            <View style={styles2.container}>
                <View style={styles2.container2}>
                    <Photos />
                    <Text style={styles2.text} > {item.title} </Text>
                </View>
            </View>
        )
    }

// contentContainerStyle={{ alignItems:"center"}}

    const Load = ()=>{
        if(load){
            return(
                <View style={{justifyContent:"center", alignItems:"center", flex:1, height:"100%"}}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            )
        }
        else{
            return(
                <FlatList
                    style={{width:"100%"}}
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item)=>item.id} 
                    initialNumToRender={5}
                    windowSize={3}
                    maxToRenderPerBatch={10}/>
            )
                
        }

    }


    return(
        <View style={styles.container}>
            <HeaderList title={listContent} />
            <Load />
        </View>
    )
}

export default Lists;
