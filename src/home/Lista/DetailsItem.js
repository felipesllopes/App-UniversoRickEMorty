import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { adcFavorite, isFavorite, rmvFavorite } from "../../utils/storage";

export default function DetailsItem() {

    const route = useRoute();
    const navigation = useNavigation();
    const [item, setItem] = useState(route.params?.data)
    const [fav, setFav] = useState(null);
    const [button, setButton] = useState('Favoritar');

    useEffect(() => {
        (async () => {
            let result = await isFavorite("@apprickandmorty", item)
            setFav(result);

            if (result) {
                setButton('Remover')
            }
        })();
    }, [fav])

    async function handleFavorite(item) {
        if (fav) {
            await rmvFavorite("@apprickandmorty", item.id);
            return;
        } else {
            await adcFavorite("@apprickandmorty", item);
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <Image source={require('../../img/tittle.png')} style={styles.tittle} />

                <View style={styles.nameCard}>
                    <Text style={[styles.text, { fontWeight: 'bold', fontSize: 20 }]}>{item.name}</Text>
                    <Text style={[styles.text, { fontWeight: 'bold', fontSize: 16 }]}>{item.id}</Text>
                </View>

                <View style={styles.imageCard}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </View>

                <View style={styles.nameCard}>
                    <Text style={[styles.text, { fontSize: 18, }]}>Espécie: {item.species === 'unknown' ? 'desconhecida' : item.species}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.text}>Localização: {item.location.name === 'unknown' ? 'desconhecida' : item.location.name}</Text>
                    <Text style={styles.text}>Origem: {item.origin.name === 'unknown' ? 'desconhecida' : item.origin.name}</Text>
                </View>

                <View style={{ marginVertical: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: 'orange' }]}
                        onPress={() => handleFavorite(item)}>
                        <Text style={styles.textButton}>{button}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lime'
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