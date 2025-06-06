import { Image, Text, View } from "react-native";
import Title from "../UiComponents/Title";

export default function ProductCard({product}) {
    return (
      <>
        <View
          style={{
            height: "auto",
            width: 173,
            height: 248,
            borderRadius: 20,
            padding: 15,
            alignItems: "center",
            justifyContent: "space-between",
            borderColor: "#7C7C7C",
            borderWidth: 1,
            margin: 10,
          }}
        >
          <View style={{ width: 100, height: 100 }}>
            <Image
              source={{ uri: product.imageCover }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View
            style={{
              alignItems: "flex-start",
              width: "100%",
              marginHorizontal: 17,
            }}
          >
            <Title titleText={product.title.slice(0, 10)} />
            <Title
              titleText={product.brand.name}
              FontSize={14}
              color="#7C7C7C"
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row-reverse",
            }}
          >
            <Image
              style={{ width: 54, height: 54 }}
              source={require("../../assets/Group 6813.png")}
            />
            <Title titleText={product.price + "$"} />
          </View>
        </View>
      </>
    );
}