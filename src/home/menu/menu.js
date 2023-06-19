import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function Menu() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="menu" size={30} color={'#000'} />
        </TouchableOpacity>
    )
}