import { ActivityIndicator, TextInput, View, Text, Image } from "react-native";
import BackButton from "../../components/ui/BackButton";
import Title from "../../components/UiComponents/Title";
import Description from "../../components/UiComponents/Description";
import NextButton from "../../components/ui/NextButton";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Code({ navigation }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  let CodeNum;

  const HandelCode = async () => {
    if (!code || code.length < 4) {
      alert("please enter a valid code");
    } else {
      try {
        setLoading(true);
        CodeNum = JSON.stringify(code);
        await AsyncStorage.setItem("Code", CodeNum);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("Login");
        }, 2000);
        console.log(CodeNum);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 25,
      }}
    >
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <BackButton />
      </View>

      {/* صورة بلايسهولدر */}
      <Image
        source={{
          uri: "https://via.placeholder.com/150x150.png?text=Enter+Code",
        }}
        style={{ width: 150, height: 150, marginBottom: 15 }}
        resizeMode="contain"
      />

      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <Title
          titleText="Enter your 4-digit code"
          FontSize={26}
          FontWeight="600"
          marginBottom={10}
        />
        {/* نص توضيحي */}
        <Text
          style={{
            fontSize: 16,
            color: "#666",
            marginBottom: 20,
            width: "100%",
          }}
        >
          Please enter the 4-digit verification code sent to your mobile number
          to continue.
        </Text>
      </View>

      <View
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Description
          DescriptionText="Code"
          FontSize={16}
          color="#7C7C7C"
          FontWeight="500"
        />
        <TextInput
          onChangeText={(text) => {
            setCode(text);
          }}
          keyboardType="numeric"
          maxLength={4}
          placeholder="- - - -"
          placeholderTextColor="#7C7C7C"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#E2E2E2",
            fontSize: 16,
            width: "100%",
            color: "black",
          }}
        />
      </View>

      <View
        style={{
          marginTop: 100,
          alignItems: "flex-end",
          width: "100%",
          paddingVertical: 10,
        }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#53B175" />
        ) : (
          <NextButton onPress={HandelCode} />
        )}
      </View>
    </View>
  );
}
