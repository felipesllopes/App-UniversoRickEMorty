import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import DrawerMenu from "../components/DrawerMenu";
import Lista from "../home/Lista";
import { getFavorites } from "../utils/storage";

export default function Favorites() {

    const [favorites, setFavorites] = useState([]);
    const focused = useIsFocused();

    useEffect(() => {
        (async () => {
            setFavorites(await getFavorites("@apprickandmorty"));
        })();
    }, [focused])

    return (
        <View style={styles.container}>

            <DrawerMenu />

            <Text style={styles.tittle}>Personagens favoritos</Text>

            <FlatList
                style={{ backgroundColor: '#32CD32' }}
                data={favorites}
                numColumns={2}
                renderItem={({ item }) => <Lista data={item} screen={'favorite'} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32CD32',
    },
    tittle: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingBottom: 8,
        paddingLeft: 10,
        borderBottomWidth: 4,
        borderBottomColor: '#006400',
    },
})