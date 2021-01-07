import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { Icon, ListItem } from 'react-native-elements';


export default class MyDonationScreen extends React.Component{
 
   constructor(){
       super();
       this.state={
           allDonations:[],
           userId:firebase.auth().currentUser.email()
       }
       this.requestRef=null;
   }



    getAllDonations=()=>{
        this.requestRef=db.collection('all_donations').where('doner_id','==',this.state.userId)
        .onSnapshot((snapshot)=>{
            var allDonation= snapshot.docs().map((document)=>{
             document.data()
            })
           this.setState({
               allDonations:allDonation
           }) 
        })
    }
 
     keyExtractor=(item,index)=>{
       index.tooString()
     }

     renderItem=({item,i})=>{
     <ListItem 
     key={i}
     title={item.book_name}
     subtitle={'requested by: '+item.requested_by+' \n Status: '+item.request_status}

     leftElement={<Icon 
     name='book'
     type='font-awesome'
     color='#36309'
   
     />}

     titleStyle={{
         color:'black',
         fontWeight:'bold'
     }}
 
     rightElement={
         <TouchableOpacity style={styles.button}
         onPress={()=>{this.sendBook(item)}}
         >
         <Text style={{colour:'white'}}>
         {item.request_status==='book send'?'Book sent':'Send Book' 
        }
         </Text>
         </TouchableOpacity>
     }
      
       bottomDivider
     />
     }

     sendNotifications=(bookDetails,request_status)=>{
     var requestId=bookDetails.request_id
     var donerId=bookDetails.doner_id
     db.collection('all_Notifications').where('request_id','==',requestId).where('doner_id','==',donerId)
     .get().then((snapshot)=>{
      snapshot.forEach((doc)=>{
      var message=''
      if(request_status==='books send')
          message=this.state.donerName+' send u the book'

       else
       message=this.state.donerName+' has shown interest in donating the book'

       db.collection('all_Notifications').doc(doc.id).update({
           message:message,
           notifications_status:'unread',
           date:firebase.firestore.FieldValue.serverTimestamp()
       })
      })
     })
     }

     sendBook=(bookDetails)=>{
     if(bookDetails.request_status==='book send'){
     var request_status='doner interested'
     db.collection('allDonations').doc(bookDetails.doc_id).update({request_status:'doner interested'})
     this.sendNotifications(booDetails,requestStatus)
     }

     else{
     var requestStatus='book send'
     db.collection('allDonations').doc(bookDetails.doc_id).update({request_status:'book sent'})
     this.sendNotifications(bookDetails,requestStatus)
     }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader 
                navigation={this.props.navigation}
                title={'My Donations'}
                />

                <View style={{flex:1}}>
                 {
                     this.state.allDonations.length===0?(
                         <View style={styles.subtitle}>
                            <Text style={{fontSize:20}}>
                            List of all Book Donations 
                            </Text>
                             </View>
                     ):(
                        <FlatList 
                        keyExtractor={this.keyExtractor}
                        data={this.state.allDonations}
                        renderItem={
                            this.renderItem
                        }
                        
                        />
                        
                        
                     )
                 }
                </View>
         
           </View>
        )
    }
    
}

const styles = StyleSheet.create({
     button:{ width:100, height:30, justifyContent:'center', alignItems:'center', shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, elevation : 16 },
      subtitle :{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' } 
    })