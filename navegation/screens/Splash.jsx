import { useEffect } from "react";
import { Image, Text, View } from "react-native";

export default function Splash({ navigation }) {
  const HandelNav = () => {
    navigation.navigate('Start')
  }
  useEffect(() => {
    setTimeout(() => {
      HandelNav()
    },4000)
  },[])
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: "#53B175",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap:20
            }}
          >
            <View>
              <Image style={{width:54.7,height:63.61}} source={require("../../assets/nectar_logo.png")} />
            </View>
            <View>
              <Text style={{ fontSize: 50, color: "white",fontWeight:"800" }}>Nectar</Text>
              <Text style={{ fontSize: 18, color: "white",letterSpacing:5 }}>Online Shop</Text>
            </View>
          </View>
        </View>
      </>
    );
}