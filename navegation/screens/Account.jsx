import { View, Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import MainButton from "../../components/ui/MainButton";

export default function Account({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);

  const getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem("userInfo");
      if (data !== null) {
        setUserInfo(JSON.parse(data));
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userInfo");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://via.placeholder.com/100x100.png?text=User",
        }}
        style={styles.avatar}
      />

      <Text style={styles.title}>My Profile</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{userInfo?.Name || "Not provided"}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{userInfo?.Email || "Not provided"}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Password</Text>
        <Text style={styles.value}>
          {userInfo?.Password ? "*".repeat(userInfo.Password.length) : "******"}
        </Text>
      </View>

      <MainButton
        buttonText="Logout"
        bgColor="#FF3B30"
        marginTop={30}
        onpress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 25,
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});
