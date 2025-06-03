import { Image, Text, TextInput, View,Pressable } from "react-native";
import MainButton from "../../components/ui/MainButton";

export default function Register({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
              alignItems: "center",
        backgroundColor:"white"
      }}
    >
      <View>
        <Image source={require("../../assets/Group.png")} />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "100%", paddingHorizontal: 25 }}>
          <Text style={{ marginBottom: 15, fontSize: 26, fontWeight: "bold" }}>
            Register
          </Text>
          <Text style={{ fontSize: 16 }}>Create your account below</Text>
        </View>
        <View
          style={{ paddingHorizontal: 24, marginVertical: 30, width: "100%" }}
        >
          <TextInput
            placeholder="Enter your name"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              width: "100%",
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder="Enter your email"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              width: "100%",
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              width: "100%",
            }}
          />
        </View>
        <View>
          <MainButton
            buttonText="Register"
            bgColor="#53B175"
            marginTop={30}
            marginBottom={25}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text>Already have an account?</Text>
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
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
