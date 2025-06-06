import {
  Image,
  Text,
  TextInput,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import MainButton from "../../components/ui/MainButton";
import Title from "../../components/UiComponents/Title";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }
    try {
      setLoading(true);
      const storedUserInfo = await AsyncStorage.getItem("userInfo");
      if (!storedUserInfo) {
        alert("No registered user found.");
        return;
      }
      const parsedInfo = JSON.parse(storedUserInfo);
      if (
        parsedInfo.Email === email.trim() &&
        parsedInfo.Password === password.trim()
      ) {
        alert("Login successful!");
        navigation.navigate("Tabs");
      } else {
        alert("Email or password is incorrect.");
      }
    } catch (error) {
      console.log("Login error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
        <View
          style={{
            width: "100%",
            paddingHorizontal: 25,
            alignItems: "flex-start",
          }}
        >
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
            onChangeText={setEmail}
            value={email}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E2E2E2",
              width: "100%",
              marginBottom: 20,
              fontSize: 16,
            }}
          />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#7C7C7C"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E2E2E2",
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
            marginBottom: 30,
            marginTop: 20,
          }}
        >
          <Pressable onPress={() => navigation.navigate("Forget-password")}>
            <Text
              style={{
                color: "#007AFF",
                textDecorationLine: "underline",
                fontSize: 16,
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>
        </View>

        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#53B175" />
          ) : (
            <MainButton
              buttonText="Login"
              bgColor="#53B175"
              marginTop={30}
              marginBottom={25}
              onpress={handleLogin}
            />
          )}
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
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: "#007AFF",
                textDecorationLine: "underline",
                fontSize: 16,
              }}
            >
              Signup
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
