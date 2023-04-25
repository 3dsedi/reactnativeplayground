import {
    StyleSheet,
    Text,
    View
  } from "react-native";
export const ShopItem = (props) => {
  return (
    <View style={styles.shopItem}>
      <Text style={styles.item}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
    shopItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    item: {
      color: "white",
    },
  });