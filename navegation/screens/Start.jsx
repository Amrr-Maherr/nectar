import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import MainButton from "../../components/ui/MainButton";

export default function Start({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/8140 1.png")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingVertical: 90,
        }}
      >
        <Image
          style={{ width: 54.7, height: 63.61 }}
          source={require("../../assets/nectar_logo.png")}
        />
        <Text
          style={{
            fontSize: 50,
            color: "white",
            textAlign: "center",
            marginBottom: 19,
          }}
        >
          Welcome to our store
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "white",
            textAlign: "center",
            fontWeight: 300,
          }}
        >
          Ger your groceries in as fast as one hour
        </Text>
        <MainButton
          buttonText="Get Started"
          onpress={() => navigation.navigate("Location")}
          bgColor="#53B175"
          marginTop={40}
        />
      </ImageBackground>
    </View>
  );
}
