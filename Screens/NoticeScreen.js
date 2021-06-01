import React,{Component} from 'react'
import{
        View,
        Text,
        TouchableOpacity,
        StyleSheet,
        Alert,
        TextInput
} from 'react-native'
import {Header} from 'react-native-elements'


export default class NoticeScreen extends Component {
   
    
    render(){
        return(
            <View>
                <Header centerComponent={{text:"LATEST NOTICE",
                 style: { color:'black', fontSize:20,fontWeight:"bold"}}}
                 backgroundColor="white"
                />

                <Text styles={{marginLeft:20, fontSize:6}}> NO LATEST NOTICE</Text>
                 </View>
               )}}