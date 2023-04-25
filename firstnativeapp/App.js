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
  // const [shopItems, setShopItems] = useState([]);
  // function itemInputhandler(enteredText) {
  //   setInteredItem(enteredText);
  // }
  // function addItemHandler() {
  //   setShopItems((currentItems) => 
  //   [...currentItems,
  //  {text: entereditem, id: Math.random().toString()}]);
  // }
  return (
    <View style={styles.appContainer}>
      <ItemInput/>
      <View style={styles.listContainer}>
        <FlatList
          data={shopItems}
          renderItem={(itemData) => {
            return (
              <ShopItem text={itemData.item.text}/>
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
