import { Image, Text, View } from "react-native"
import { Pressable, TextInput } from "react-native-gesture-handler";
import MainButton from "../../components/ui/MainButton"
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
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
            <Text style={{ fontSize: 26, fontWeight: 500, marginBottom: 30 }}>
              Get your groceries{"\n"}with nectar
            </Text>
          </View>
          <View style={{ paddingHorizontal: 24, marginVertical: 30 }}>
            <TextInput
              placeholder="Enter your email"
              style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
            />
          </View>
          <View
            style={{
              marginVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 14 }}>Or connect with social media</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MainButton
              buttonText="Continue with Google"
              marginTop={20}
              marginBottom={20}
              bgColor="#5383EC"
              icon={<Ionicons name="logo-google" size={20} color="white" />}
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MainButton
              buttonText="Continue with Facebook"
              bgColor="#4A66AC"
              icon={<FontAwesome name="facebook" size={20} color="white" />}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  color: "#007AFF",
                  textDecorationLine: "underline",
                  fontSize: 16,
                }}
              >
                Skip
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
}