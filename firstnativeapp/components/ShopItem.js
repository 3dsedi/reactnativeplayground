import {
    StyleSheet,
    Text,
    View, 
    Pressable
  } from "react-native";
export const ShopItem = (props) => {
  return (
    <View style={styles.shopItem} >
    <Pressable android_ripple={{color: '#210644'}}
     onPress={props.onDeleteItem.bind(this, props.id)}
     style={({pressed})=> pressed && styles.pressedItem }
     >
      <Text style={styles.item}>{props.text}</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    shopItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    pressedItem:{
opacity: 0.5,

    },
    item: {
      color: "white",
      padding: 8
    },
  });