import { View, Text, TextInput, Pressable, Image } from "react-native";
import Title from "../../components/AuthComponents/Title";
import MainButton from "../../components/ui/MainButton";

export default function ForgetPassword({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 25,
      }}
    >
      <View>
        <Image source={require("../../assets/Group.png")} />
      </View>
      <View style={{ width: "100%",alignItems:"flex-start" }}>
        <Title
          titleText="Forgot Password"
          marginBottom={15}
          FontSize={26}
          FontWeight="bold"
        />
        <Text style={{ fontSize: 16, marginBottom: 25 }}>
          Please enter your email address to reset your password
        </Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#7C7C7C"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#E2E2E2",
            width: "100%",
            marginBottom: 40,
            fontSize: 16,
          }}
        />
        <MainButton
          buttonText="Send Reset Link"
          bgColor="#53B175"
          marginTop={0}
          marginBottom={20}
        />
      </View>
    </View>
  );
}
