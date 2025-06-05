import { Text, View, StyleSheet } from "react-native";
import ProductSection from "../../components/ProductComponent/ProductSection";

export default function Shop() {
  return (
   <ProductSection/>
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
