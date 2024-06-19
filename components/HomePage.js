import { View,Text,StyleSheet,Image } from "react-native";
import Task from "./Task";
import Jobs from "./jobs";
import Header from "./mainHeader";
import { ScrollView } from "react-native-gesture-handler";


const Home = ({ route }) => {
  const { name, email } = route.params;
  const profileImage = require('../assets/profile.png')
  return (
    <ScrollView>

    <View 
      style={{ paddingVertical:20,
      paddingHorizontal:10}}>
        <View 
            style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16, 
            }}
          >
            <View>
              <Text style={{fontWeight: 'bold',fontSize: 30}}>{name}</Text>
              <Text style={{fontSize: 20,color: '#AFB0B6'}}>{email}</Text>
            </View>
          <Image 
            source={profileImage} 
            style={{width: 55,height: 55,borderRadius: 50}}
          />
        </View>
      
      <Header />
      <Jobs />
      <Task />
    </View>

    </ScrollView>
  );
};

export default Home;