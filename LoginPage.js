
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  

  const handleLogin = () => {
    if (username && email) {
      navigation.navigate('Home',{name: username, email: email});
    } else {
      Alert.alert('Login Failed');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.jobiz}>Jobizz</Text>
        <Text style={styles.welcome}>Welcome Back 👋</Text>
        <Text style={styles.jobs}>Let's login. Apply to jobs!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          placeholderTextColor={'#AFB0B6'}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={'#AFB0B6'}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.continue}>Or continue with</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/apple.jpg')} style={styles.image} />
          <Image source={require('../assets/google.jpg')} style={styles.image} />
          <Image source={require('../assets/facebook.jpg')} style={styles.image} />
        </View>
        <Text style={styles.continue}>Haven't an account? <Text style={styles.register}>Register</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    marginBottom: 50,
    alignSelf: 'flex-start',
    marginLeft: 45
  },
  jobiz: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#356899',
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 10,
  },
  jobs: {
    fontSize: 15,
    color: '#AFB0B6',
  },
  continue: {
    fontSize: 15,
    color: '#AFB0B6',
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    width: '100%',
    height: 50,
    color: '#AFB0B6',
    borderColor: '#AFB0B6',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  image: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  register: {
    color: '#356899',
  },
});