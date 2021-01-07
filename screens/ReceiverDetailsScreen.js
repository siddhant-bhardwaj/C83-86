import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Card,Heder,Icon} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
export default class ReceiverDetailsScreen extends React.Component{

constructor(props){
super(props)
this.state={
    userId:firebase.auth().currentUser.email,
    receiverId:this.props.navigation.getParam('details')['user_id'],
    requestId:this.props.navigation.getParam('details')['request_id'],
    bookName:this.props.navigation.getParam('details')['book_name'],
    reasonForRequesting:this.props.navigation.getParam('details')['reason_to_request'],
    receiverName:'',
    receiverContact:'',
    receiverAddress:'',
    receiverRequestDocId:''
}
}

getRecieverDetails(){
    db.collection('users').where('email_id','==',this.state.receiverId).get()
    .then((snapShot)=>{
        snapShot.forEach((doc)=>{
            this.setState({
                receiverName:doc.data().first_name,
                receiverContact:doc.data().contact,
                receiverAddress:doc.data().address
            })
        })
    })
}



    render(){
        return(
            <View style={styles.container}>
               <View style={{flex:0.3}}>
                <Card title={'Item Information'}
                titleStyle={{fontSize:20}}
                >
                       <Card>
                         <Text style={{fontWeight:'bold'}}>
                           Name:{this.state.bookName}
                         </Text>
                       </Card>

                       <Card>
                         <Text style={{fontWeight:'bold'}}>
                           Reason:{this.state.reasonForRequesting}
                         </Text>
                       </Card>
                </Card>
               </View>

               <View style={{flex:0.3}}>
                <Card title={'Receiver Information'}
                titleStyle={{fontSize:20}}
                >
                       <Card>
                         <Text style={{fontWeight:'bold'}}>
                        Name:{this.state.receiverName}
                         </Text>
                       </Card>

                       <Card>
                         <Text style={{fontWeight:'bold'}}>
                           contact:{this.state.receiverContact}
                         </Text>
                       </Card>

                       <Card>
                         <Text style={{fontWeight:'bold'}}>
                           address:{this.state.address}
                         </Text>
                       </Card>
                        
                </Card>
               </View>

              <View style={buttonContainer}>
                  {
                      this.state.receiverId !==this.state.userId
                      ?(
                      <TouchableOpacity style={styles.button}
                      onPress={()=>{
                          this.updateBookStatus()
                          this.props.navigation.navigate('MyDonations')
                      }}
                      >
                    <Text>
                        I want to donate
                    </Text>
                      </TouchableOpacity>   
                      ):null
                  }
              </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({ 
    container: { flex:1, },
     buttonContainer : { flex:0.3, justifyContent:'center', alignItems:'center' },
      button:{ width:200, height:50, justifyContent:'center', alignItems : 'center', borderRadius: 10, backgroundColor: 'orange', shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, elevation : 16 } })