import { ImageBackground, View, Text, StyleSheet } from "react-native";

export default function HomeBanner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/banner.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: "100%",
    marginVertical:10
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
