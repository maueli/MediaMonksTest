import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../store/infoSlice';
import ModalPhoto from './ModalPhoto';

const  PhotoList = ({route})=>{
    
    const { listContent } = route.params;
    const dispatch = useDispatch();
    const info = useSelector( state => state.info.info)

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
    const [showHideModal, setShowHideModal] = useState(false);
    const [itemSelected, setItemSelected] = useState("");



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

    const windowsWidth = Dimensions.get('window').width;


    const renderItem = ({item})=>{
        const styles2 = {
            container:{
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"row",
                flexWrap:"wrap",
                flex:1
            }
        }
        const onPress=()=>{
            setShowHideModal(true);
            setItemSelected(item);
        }

        return(
            <TouchableOpacity
                onPress={()=>onPress()} 
                style={styles2.container}>
                <Image 
                    source={{uri:item.url} } 
                    style={{width:"100%",height:windowsWidth/3 }} />
            </TouchableOpacity>
        )
    }

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
                        numColumns={3}
                        columnWrapperStyle={{flexWrap:"wrap"}}
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
            <Load />
            <ModalPhoto 
                showHideModal={showHideModal} 
                setShowHideModal={setShowHideModal}
                item={itemSelected}/>
        </View>
    )
}

export default PhotoList;
/**
 *                 <>
                    {list.map(item=>{
                        return(
                            <renderItem item={item}/>
                        )
                    })
                    }
                </>
 */