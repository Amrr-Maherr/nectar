import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import ProductSection from "../../components/ProductComponent/ProductSection";
import { ScrollView } from "react-native";
import SearchInput from "../../components/UiComponents/SearchInput";
import useFetchData from "../../Hooks/useFetchData";

export default function Shop() {
  const {loading,error,data} = useFetchData("products")
  return (
    <><ScrollView>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <SearchInput />
        </View>
        
          <View style={{ backgroundColor: "white" }}>
            <ProductSection direction={false} data={data} error={error} loading={loading}/>
          </View>
      </SafeAreaView>
        </ScrollView>
    </>
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
