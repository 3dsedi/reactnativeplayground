
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View  style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Shoping List'/>
      <Button title='Add Item'/>
    </View>
    <View>
      <Text>Shoping List</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8

  }

});
