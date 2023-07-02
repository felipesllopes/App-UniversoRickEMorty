import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Lista({ data, screen }) {

    const navigation = useNavigation();

    function navegate() {
        navigation.navigate('DetailsItem', { data: data, screen: screen })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6} onPress={navegate}>
                <Image style={styles.image} source={{ uri: data.image }} resizeMode="cover" />
                <Text style={styles.name}>{data.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 3,
        alignItems: 'center',
        backgroundColor: '#32CD32'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10
    },
    name: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: 200,
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 2,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
})