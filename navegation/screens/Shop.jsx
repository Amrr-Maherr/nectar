import { Text, View, StyleSheet } from "react-native";

export default function Shop() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
