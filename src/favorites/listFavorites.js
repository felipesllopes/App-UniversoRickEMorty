import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ListFavorites({ data }) {

    const navigation = useNavigation();

    function navegate() {
        navigation.navigate('DetailsFavorites', { data: data })
    }

    return (
        <View style={styles.container}>
            {data &&
                <TouchableOpacity activeOpacity={0.6} onPress={navegate}>
                    <Image style={styles.image} source={{ uri: data.image }} />
                    <Text style={styles.name}>{data.name}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 3,
        alignItems: 'center',
        backgroundColor: '#00FF00',
    },
    image: {
        width: 200,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    name: {
        backgroundColor: '#000',
        width: 200,
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 2,
    }
})