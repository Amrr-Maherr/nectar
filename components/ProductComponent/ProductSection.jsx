import { ScrollView, View } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductSection({direction}) {
    return (
      <>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={direction} >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-evenly",
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