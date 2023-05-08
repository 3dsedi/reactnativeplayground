import { useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { ShopItem } from "./components/ShopItem";
import { ItemInput } from "./components/ItemInput";

export default function App() {
  // const [entereditem, setInteredItem] = useState("");
  const [shopItems, setShopItems] = useState([]);
  // function itemInputhandler(enteredText) {
  //   setInteredItem(enteredText);
  // }
  function addItemHandler(entereditem) {
    setShopItems((currentItems) => 
    [...currentItems,
   {text: entereditem, id: Math.random().toString()}]);
  }
  function deleteItemHandler(id) {
   setShopItems (currentItems=> {
    return currentItems.filter((item)=> item.id !==id)
   } )
  }
  return (
    <View style={styles.appContainer}>
      <ItemInput onAddItem={addItemHandler}/>
      <View style={styles.listContainer}>
        <FlatList
          data={shopItems}
          renderItem={(itemData) => {
            return (
              <ShopItem 
              text={itemData.item.text}
              onDeleteItem={deleteItemHandler}
              id={itemData.item.id}/>
            );
          }}
          keyExtractor={(item, index)=> {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 5,
  }
});
