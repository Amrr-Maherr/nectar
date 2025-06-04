import { Image, Text, View } from "react-native"
import { Pressable, TextInput } from "react-native-gesture-handler";
import MainButton from "../../components/ui/MainButton"
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Link from "../../components/UiComponents/Link";
import Description from "../../components/UiComponents/Description";
export default function GoogleLogin({navigation}) {
    return (
      <>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center ",
            backgroundColor: "white",
            flex: 1,
            position: "relative",
          }}
        >
          <View style={{ marginBottom: 49 }}>
            <Image
              style={{ width: "100%", height: 340 }}
              source={require("../../assets/Mask Group.png")}
            />
          </View>
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 26, fontWeight: 600, marginBottom: 30 }}>
              Get your groceries{"\n"}with nectar
            </Text>
          </View>
          <View style={{ paddingHorizontal: 24, marginVertical: 30 }}>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#7C7C7C"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E2E2E2",
                fontSize: 16,
              }}
            />
          </View>
          <View
            style={{
              marginVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Description
              DescriptionText="Or connect with social media"
              FontSize={14}
              color="#828282"
              FontWeight="500"
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MainButton
              buttonText="Continue with Google"
              marginTop={20}
              marginBottom={20}
              FontWeight="600"
              FontSize={16}
              color="#FFF9FF"
              bgColor="#5383EC"
              icon={<Ionicons name="logo-google" size={25} color="white" />}
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MainButton
              buttonText="Continue with Facebook"
              FontWeight="600"
              FontSize={16}
              color="#FFF9FF"
              bgColor="#4A66AC"
              icon={<FontAwesome name="facebook" size={25} color="white" />}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Link
              LinkText="Skip"
              onPress={() => {
                navigation.navigate("Location");
              }}
            />
          </View>
        </View>
      </>
    );
}