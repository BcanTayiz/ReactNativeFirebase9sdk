import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import { authentication } from './firebase/firebase-config';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Username' />
      <TextInput placeholder='Password'/>
      <Button title="Signin"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
