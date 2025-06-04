import { Image, Text, TextInput, View, Dimensions, Pressable } from "react-native";
import MainButton from "../../components/ui/MainButton";
import Title from "../../components/AuthComponents/Title";

export default function Login({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
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
          <Title
            titleText="Login"
            marginBottom={15}
            FontSize={26}
            FontWeight="bold"
          />
          <Text style={{ fontSize: 16 }}>Enter your emails and password</Text>
        </View>
        <View
          style={{ paddingHorizontal: 24, marginVertical: 30, width: "100%" }}
        >
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#7C7C7C"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              width: "100%",
              marginBottom: 20,
              fontSize: 16,
            }}
          />
          <TextInput
            placeholderTextColor="#7C7C7C"
            placeholder="Enter your password"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              width: "100%",
              fontSize: 16,
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 25,
            alignItems: "flex-end",
            justifyContent: "flex-start",
            marginBottom: 30,
            marginTop: 20,
          }}
        >
          <Text style={{ textAlign: "right" }}>Forgot Password?</Text>
        </View>
        <View>
          <MainButton
            buttonText="Login"
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
          <Text>Don’t have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text
              style={{
                color: "#007AFF",
                textDecorationLine: "underline",
                fontSize: 16,
              }}
            >
              Singup
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
