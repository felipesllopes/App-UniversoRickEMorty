import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import api from "../services/api";
import Lista from "./Lista";
export default function Home() {

    const [character, setCharacter] = useState([]);
    const [page, setPage] = useState(null);
    const [submitPage, setSubmitPage] = useState('1');

    useEffect(() => {
        (async () => {
            const response = await api.get(`/character?page=${submitPage}`)
                .then(async (current) => {
                    setCharacter(await current.data);
                })
                .catch((err) => {
                    alert("Página não encontrada");
                    console.log(err)
                    return;
                })
        })()
    }, [submitPage])

    function search() {
        if (page >= 1 && page <= 42) {
            setSubmitPage(page)
            setPage("");
            Keyboard.dismiss();
        } else {
            alert("Digite uma página de 1 a 42");
            setPage("")
            return;
        }
    }

    return (
        <ImageBackground source={require("../img/wallpaper.jpg")} style={styles.container}>

            <Image source={require('../img/tittle.png')} style={styles.tittle} />

            {character &&
                <View style={{ flex: 1, }}>
                    <View style={styles.viewSearch}>
                        <TextInput
                            placeholder='Página'
                            style={styles.pageInput}
                            keyboardType="numeric"
                            value={page}
                            onChangeText={(text) => setPage(text)}
                        />
                        <TouchableOpacity onPress={search} style={styles.buttonSearch}>
                            <FontAwesome name="search" size={30} color={'black'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textPag}>Página {submitPage} de 42</Text>

                    <FlatList
                        style={styles.flatList}
                        data={character.results}
                        renderItem={({ item }) => <Lista data={item} />}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />

                </View>
            }
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25ff14',
    },
    tittle: {
        width: 256,
        height: 80,
        alignSelf: 'center',
        marginVertical: 10,
    },
    viewSearch: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
        paddingHorizontal: 10,
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },
    pageInput: {
        fontSize: 18,
        flex: 1,
    },
    buttonSearch: {
        paddingHorizontal: 10
    },
    textPag: {
        color: '#FFF',
        margin: 3,
        backgroundColor: 'black',
        width: 115,
        textAlign: 'center',
        borderRadius: 3,
    },
    flatList: {
        backgroundColor: '#555',
    }
})