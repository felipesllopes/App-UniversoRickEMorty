import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailsItem() {

    const route = useRoute();
    const navigation = useNavigation();

    return (
        <ImageBackground style={styles.container} source={require('../../img/wallpaper.jpg')}>
            <ScrollView>

                <Image source={require('../../img/tittle.png')} style={styles.tittle} />

                <View style={styles.nameCard}>
                    <Text style={[styles.text, { fontWeight: 'bold', fontSize: 20 }]}>{route.params?.data.name}</Text>
                    <Text style={[styles.text, { fontWeight: 'bold', fontSize: 16 }]}>{route.params?.data.id}</Text>
                </View>

                <View style={styles.imageCard}>
                    <Image source={{ uri: route.params.data.image }} style={styles.image} />
                </View>

                <View style={styles.nameCard}>
                    <Text style={[styles.text, { fontSize: 18, }]}>Espécie: {route.params?.data.species === 'unknown' ? 'desconhecida' : route.params?.data.species}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.text}>Localização: {route.params?.data.location.name === 'unknown' ? 'desconhecida' : route.params?.data.location.name}</Text>
                    <Text style={styles.text}>Origem: {route.params?.data.origin.name === 'unknown' ? 'desconhecida' : route.params?.data.origin.name}</Text>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 30 }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tittle: {
        width: 256,
        height: 80,
        alignSelf: 'center',
        marginVertical: 20,
    },
    nameCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 10,
        marginHorizontal: 16,
        backgroundColor: '#FFDEAD',
    },
    imageCard: {
        marginHorizontal: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 4,
    },
    image: {
        width: '100%',
        height: 360,
    },
    text: {
        fontSize: 17,
        marginHorizontal: 10,
    },
    info: {
        marginHorizontal: 20,
        borderWidth: 2,
        backgroundColor: '#DFD',
        paddingVertical: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    button: {
        backgroundColor: '#ADFF2F',
        borderWidth: 2,
        borderRadius: 14,
    },
    textButton: {
        fontSize: 20,
        padding: 6,
        paddingHorizontal: 14,
        fontWeight: 'bold',
    },
})