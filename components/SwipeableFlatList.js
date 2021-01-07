import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';




export default class SwipeableFlatList extends React.Component{
    constructor(props){
    super(props);
    this.state={allNotifications:this.props.allNotfications}
    }

    onSwipeValueChange=(swipeData)=>{
        var allNotfications=this.state.allNotfications
        const {key,value}=swipeData
        if(value<-Dimensions.get('window').width()){
            const newData=[... allNotfications]
            const prevIndex=allNotifications.findIndex((item)=>{
            item.key===key
            })
            this.updateMarkAsRead(allNotifications[prevIndex])
             newData.spllice(prevIndex) 
             this.setState({
                 allNotifications: newData
             })
        }
    }
    
     updateMarkAsRead=(notification)=>{
db.collection('all_notifications').doc((notification.doc_id)).update({
    notification_status: 'read',


})
     }
   
      renderItem=(data)=>{
      <ListItem 
      leftElement={<icon 
      name='book'
      type='font-awesome'
      color='#6969'
      />}
      title={data.item.book_name }
      titleStyle={{color:'black',fontWeight:'bold'}}
      subtitle={data.item.message}
      bottomDivider
      />
      } 

       renderHideen=()=>{
           <View style={styles.rowBack}>
           <View style={styles.backRightBtn,styles.backRightBtnRight}>
           <Text style={styles.packTextWhite}>

           </Text>
           </View>
           </View>
       }

       

    render(){
        return(
           <View style={styles.container}>
           <SwipeListView 
           disableRightSwipe
           data={this.state.allNotifications}
           renderItem={this.renderItem}
           renderHiddennItem={this.renderHiddennItem}
           rightOpenValue={-dia,mentions.get('window').with}
           previewRowKey={'0'}
           previewOpenValue={-40}
           previewOpenDelay={3000}
           unSwipeValueChange={this.onSwipeValueChange}
           />
           </View> 
        )
    }
}



const styles = StyleSheet.create
({ 
    container: { backgroundColor: 'white', flex: 1, }, 
    backTextWhite: { color: '#FFF', fontWeight:'bold', fontSize:15 }, rowBack: { alignItems: 'center', backgroundColor: '#29b6f6', flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, }, backRightBtn: { alignItems: 'center', bottom: 0, justifyContent: 'center', position: 'absolute', top: 0, width: 100, }, backRightBtnRight: { backgroundColor: '#29b6f6', right: 0, }, });