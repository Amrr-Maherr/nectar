import { TextInput, View } from "react-native";
import BackButton from "../../components/ui/BackButton";
import Title from "../../components/UiComponents/Title";
import Description from "../../components/UiComponents/Description";
import NextButton from "../../components/ui/NextButton";

export default function Code({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "white",
          paddingHorizontal: 25,
        }}
      >
        <View style={{ alignItems: "flex-start", width: "100%" }}>
          <BackButton />
        </View>
        <View style={{ alignItems: "flex-start", width: "100%" }}>
          <Title
            titleText="Enter your 4-digit code"
            FontSize={26}
            FontWeight="600"
            marginBottom={27}
          />
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
            FontWeight="300"
            color="#7C7C7C"
            FontWeight="500"
          />
          <TextInput
            keyboardType="numeric"
            maxLength={4}
            placeholder="- - - -"
            placeholderTextColor="#7C7C7C"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E2E2E2",
              fontSize: 16,
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            marginTop: 222,
            alignItems: "flex-end",
            width: "100%",
            paddingVertical: 10,
          }}
        >
          <NextButton
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </View>
    </>
  );
}
