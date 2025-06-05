import { Image, TouchableOpacity } from "react-native";

export default function BackButton({navigation}) {
    return (
        <TouchableOpacity onPress={()=>{
            navigation.goBack()
        }}>
            <Image source={require("../../assets/BackButton.png")} style={{height:18,width:10,objectFit:"contain"}} />
        </TouchableOpacity>
    )
}