import {
  Image,
  Text,
  TextInput,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import MainButton from "../../components/ui/MainButton";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register({ navigation }) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!Name || !Email || !Password) {
      alert("Please enter all required information.");
      return;
    }

    try {
      setLoading(true);
      const userInfo = {
        Name,
        Email,
        Password,
      };
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      console.log("Registered:", userInfo);
      alert("Registration successful! You can now log in.");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Register error:", error);
      alert("Something went wrong during registration.");
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
            onChangeText={setName}
            value={Name}
            placeholder="Enter your name"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E2E2E2",
              width: "100%",
              marginBottom: 20,
              fontSize: 16,
            }}
          />
          <TextInput
            onChangeText={setEmail}
            value={Email}
            placeholder="Enter your email"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E2E2E2",
              width: "100%",
              marginBottom: 20,
              fontSize: 16,
            }}
          />
          <TextInput
            onChangeText={setPassword}
            value={Password}
            secureTextEntry={true}
            placeholder="Enter your password"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E2E2E2",
              width: "100%",
              fontSize: 16,
            }}
          />
        </View>

        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#53B175" />
          ) : (
            <MainButton
              buttonText="Register"
              bgColor="#53B175"
              marginTop={30}
              marginBottom={25}
              onpress={handleRegister}
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
          <Text>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
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
