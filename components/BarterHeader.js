import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Icon} from 'react-native-elements';

const BarterHeader=(props)=>{
return(
    <Header 
    centerComponent={{text:props.title, style:{color:'#908A5A9',fontSize:20,fontWeight:'bold'}}}
    backgroundColor='#EAF8FE'
    />

)
}


export default BarterHeader