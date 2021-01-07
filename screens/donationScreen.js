import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import BarterHeader from '../components/BarterHeader';
import db from './config';

export default class DonationScreen extends React.Component{
constructor(){
    super();
    this.state={
        requestItemsList:[]
    }
    this.requestRef=null
}

   getRequestedItemsList=()=>{
   this.requestRef=db.collection('requested_items')
   .onSnapShot((snapShot)=>{
       var requestItemsList=snapShot.docs.map((document)=>{document.data()})
   })
   this.setState({
       requestItemsList:requestItemsList
   })
   }


   keyExtractor=(item,index)=>{
       index.toString();
   }

   renderItem=({item,i})=>{
    return(
        <ListItem 
        key={i}
        title={item.item_name}
        subtitle={item.reason_to_request}
        titleStyle={{color:'blue', fontWeight:'bold'}}
        rightElement={
            <TouchableOpacity
            style={styles.button}
            >
            <Text
            style={{color:'red'}}
            >
            View
            </Text>
            </TouchableOpacity>
        }
        bottomDivider
        />
    )
   }

   render(){
    return(
        <View style={{flex:1}}>
            <BarterHeader 
            title='Donate Items'              
            />
            <View style={{flex:1}}>
                 {this.state.requestItemsList.length===0?
                 (
                 <View style={styles.subContainer}>
                 <Text>
                     List of all requested Items
                 </Text>
                 </View>    
                 ):
                 (
                     <FlatList 
                     keyExtractor={this.keyExtractor}
                     data={this.state.requestBooksList}
                     renderItem={this.renderItem}
                     />
                 )          
                     
             }
            </View>
        </View>
    )
}

}

const styles = StyleSheet.create({ 
    subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' }, 
    button:{ width:100, height:30, justifyContent:'center', alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8 } } 
})