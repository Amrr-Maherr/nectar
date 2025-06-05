import { ScrollView, View } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductSection() {
    return (
      <>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </View>
        </ScrollView>
      </>
    );
}