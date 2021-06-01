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

export default class RegisterScreen extends Component {
    constructor(){
        super()
        this.state = {
                       Issue:''
        }   
    }

    subIssue=(Issue)=>{
       db.collection("Issue").add({
           "Issue" : Issue
       })
       Alert.alert("The Issue Has Been Registered")
    }
    render(){
        return(
            <View>
                <Header centerComponent={{text:"Regster Issue",
                 style: { color:'black', fontSize:20,fontWeight:"bold"}}}
                 backgroundColor="white"
                />
                 
                 <TextInput
            style={styles.name}
                  placeholder={"ENTER ISSUE"}
                  onChangeText={text=>this.setState({Issue:text})}
                  multiline
                  />

     <TouchableOpacity style={styles.button}
     onPress = {()=>{this.subIssue(this.state.Issue)}}
     >
         <Text>SUBMIT</Text>
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
                width:70,
                height:50,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:10,
                backgroundColor:"#b073c6",
                shadowColor: "#000",
                marginTop:50,
                marginLeft:80,
                 }
        
        })
