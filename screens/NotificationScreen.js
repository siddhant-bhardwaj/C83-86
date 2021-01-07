import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { ListItem, Icon, SwipView } from 'react-native-elements';
import MyHeader from '../component/MyHeader';
import SwipeableFlatList from '../component/SwipeableFlatList';
import firebase from 'firebase';

export default class NotificationScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userId:firebase.auth().currentUser.email,
            allNotifications:[]
        }
        this.NotificationRef=null
    }
    
    getNotifications=()=>{
        this.requestRef=db.collection('all_Notifications').where('notifications_status','==','unread')
        .where('targeted_user_id','==',this.state.userId)
        .onSnapshot((snapshot)=>{
        var allNotifications=[];
        snapshot.docs.map((doc)=>{
         var notification=doc.data();
         notification['doc_id']=doc.id
         allNotifications.push(notification)       
        })
        this.setState({
            allNotifications:allNotifications

        })
        })
    }
      
      keyextractor=(item,idex)=>{
       index.toString()
      }

      renderItem=({item,index})=>{
      return(
          <ListItem 
          key={index}
          leftElement={<Icon 
          name='book'
          type='font-awesome'
          colour='#6969'
          />}
          title={item.book_name}
          titleStyle={{color:'black',fontWeight:'bold'}}
          subtitle={item.message}
          bottomDivider
          />
         
      )

      }

      componentDidMount(){
          this.getNotifications()
      }

      componentWillUnmount(){
          this.NotificationRef()
      }
     
    render(){
   
        return(
            <View style={styles.container}> 
             <View style={{flex:0.1}}>
            <MyHeader 
            title={'Notifications'}
            navigation={this.props.navigation}
            />            
             </View>
             <View style={{flex:0.9}}>
            {
                this.state.allNotifications.length===0?(
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:25}}>
                    You have no notifications
                    </Text>
            
                    </View>
                ):(
                    
                    <SwipeableFlatList 
                    allNotifications={this.state.allNotifications}

                    />
                    
                    
                )
            }
             </View>
            </View>
        )
    }
     
}

const styles = StyleSheet.create({ container : { flex : 1 } })