import { View,Image,TextInput,TouchableOpacity,StyleSheet } from "react-native";


export default function Header(){
  return(
    <View>
      <View>
        <View style={styles.searchFrame}>
          <View style={styles.search}>
            <Image source={require("../assets/mynaui_search.png")} />
            <TextInput placeholder="Search a job or position" placeholderTextColor='#AFB0B6' style={styles.inputStyles}/>
          </View>
          <TouchableOpacity style={{backgroundColor:'#AFB0B6', padding:10, borderRadius:10}}>
          <Image source={require("../assets/Vector.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchFrame:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:20, 
  },
  search:{
    backgroundColor:"white",
    padding:5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    width:"76%",
    borderRadius:20
  },
  inputStyles:{
    width:"80%",
    padding:10
  }
})