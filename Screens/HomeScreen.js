import React,{Component} from 'react'
import{
        View,
        Text,
        TouchableOpacity,
        StyleSheet
} from 'react-native'


export default class HomeScreen extends Component {
    render(){
        return(
            <View style ={{justifyContent:'center', flex:1, alignItems:'center',backgroundColor:'#99d1ff'}}>
                  <View>
          
          <Text style={styles.title}>Social App</Text>
         
        </View>

        <TouchableOpacity style = {styles.not}
        onPress={()=>{this.props.navigation.navigate("NoticeScreen")}}
        >
            <Text style ={styles.notText}>LATEST NOTICE</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.reg}
        onPress={()=>{this.props.navigation.navigate("RegisterScreen")}}
        >
            <Text style ={styles.regText}>REGISTER ISSUE</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.don}
        onPress={()=>{this.props.navigation.navigate("DonateScreen")}}>
            <Text style ={styles.donText}>DONATE</Text>
        </TouchableOpacity>
        
            </View>
            )
    }
}

const styles = StyleSheet.create({
    title :{
        fontSize:55,
        fontWeight:'300',
        paddingBottom:30,
        color : '#2f76af'
        },
    not: {
        width: 300,
         height: 75,
        backgroundColor:'#9b59b3',    
        borderRadius: 25,
        marginBottom: 20

},
    notText:{
         fontSize: 20,
        color:'black',
        textAlign:'center',
        margin:14
},
    reg:{
        width:300,
        height:75,
        backgroundColor: '#b073c6',     
        borderRadius: 25,
        marginBottom: 20

},
    regText:{
        fontSize: 20,
        color:'black',
        textAlign:'center',
        margin:14

},
    don:{
        width:300,
         height:75,
        backgroundColor:'#c9a0d7',
        borderRadius: 25

},

    donText :{
        fontSize: 20,
        color:'black',
        textAlign:'center',
      margin:14

}
})