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
import firebase from 'firebase'
import db from '../config'

export default class DonateIssue extends Component {
    constructor(){
        super()
        this.state = {
                       Amount:''
        }   
    }

    Donate=(Amount)=>{
       db.collection("Issue").add({
           "Amount" : Amount
       })
       Alert.alert("The Money Has Been Donated")
    }
    render(){
        return(
            <View>
                <Header centerComponent={{text:"Donate",
                 style: { color:'black', fontSize:20,fontWeight:"bold"}}}
                 backgroundColor="white"
                />
                 
                 <TextInput
            style={styles.name}
                  placeholder={"DONATE"}
                  onChangeText={text=>this.setState({Issue:text})}
                  multiline
                  />

     <TouchableOpacity style={styles.button}
     onPress = {()=>{this.Donate(this.state.Amount)}}
     >
         <Text>DONATE</Text>
     </TouchableOpacity>
            </View>
        )}}
        const styles = StyleSheet.create({
            name:{
                 width:"75%",
                 height:55,
                 alignSelf:'center',
                 borderColor:'#ffab91',
                 borderRadius:12,
                 borderWidth:1,
                 marginTop:50,
                 padding:10,
               },
               button:{
                width:80,
                height:50,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:10,
                backgroundColor:"#c9a0d7",
                shadowColor: "#000",
                marginTop:50,
                marginLeft:80,
                 }
        
        })
