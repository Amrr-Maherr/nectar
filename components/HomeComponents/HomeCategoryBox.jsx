import { Image, Text, View } from "react-native";

export default function HomeCategoryBox({bgColor,image,text}) {
    return (
      <>
        <View
          style={{
            width: 248,
            height: 107,
            backgroundColor: bgColor,
            borderRadius: 18,
            padding: 17,
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Image style={{ width: 71, height: 71 }} source={image} />
          <Text style={{ color: "#3E423F",fontSize:20,fontWeight:600 }}>{text}</Text>
        </View>
      </>
    );
}