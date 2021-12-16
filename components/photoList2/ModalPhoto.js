import React from "react";
import { Modal, Text, View , TouchableOpacity,ScrollView, Image} from "react-native";


const ModalPhoto = (props) => {


    const styles = {
        centeredView: {
            flex: 1,
            //height:"100%",
            justifyContent: "center",
            alignItems: "center"
        },
        modalView: {
            flex:1,
            height:"100%",
            width:"90%",
            margin: 20,
            paddingBottomm:10,
            backgroundColor:"white",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            //borderWidth:1,
            borderColor:"white",
            justifyContent:"space-evenly"
        },
        containerText:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            padding:30
        },
        text:{
            letterSpacing:1,
            fontWeight:"bold"
        },
        img:{
            flex:2,
            width:"100%"
        },
        containerBtn:{
            flex:1, 
            justifyContent:"center", 
            alignItems:"center"
        },
        btn:{
            borderColor:"gray",
            borderWidth:1,
            borderRadius:10,
            width:"40%",
            height:50,
            justifyContent:"center",
            alignItems:"center"
        }
    };

  return (
    <View >
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.showHideModal}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            props.setShowHideModal(false);
            //setModalVisible(!modalVisible);
          }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image 
                        source={{uri:props.item.url} } 
                        style={styles.img} />
                    <View style={styles.containerText}>
                        <Text style={styles.text}>
                            {props.item.title}
                        </Text>
                    </View>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={()=>props.setShowHideModal(false)}>
                            <Text>
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
        
  );
};



export default ModalPhoto;