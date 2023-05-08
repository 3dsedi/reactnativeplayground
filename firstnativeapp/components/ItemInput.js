import { useState } from "react";
import {
    View,
    TextInput, 
    Button,
    StyleSheet
  } from "react-native";
export const ItemInput = (props) => {
    const [entereditem, setInteredItem] = useState("");
    // const [shopItems, setShopItems] = useState([]);
    function itemInputhandler(enteredText) {
        setInteredItem(enteredText);
      }
      function addItemHandler() {
        props.onAddItem(entereditem);
        setInteredItem('')
      //   setShopItems((currentItems) => 
      //   [...currentItems,
      //  {text: entereditem, id: Math.random().toString()}]);
      }
  return (
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Shoping List"
          onChangeText={itemInputhandler}
          value={entereditem}
        />
        <Button title="Add Item" onPress={addItemHandler} />
      </View>
  )
}
const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "70%",
      marginRight: 8,
      padding: 8,
    }
  });
  