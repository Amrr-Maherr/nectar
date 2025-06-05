import { Image, TouchableOpacity } from "react-native";

export default function NextButton({navigation,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={require("../../assets/Group 6802.png")} style={{height:67,width:67,objectFit:"contain"}} />
        </TouchableOpacity>
    )
}