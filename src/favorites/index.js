import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import DrawerMenu from "../components/DrawerMenu";
import { getFavorites } from "../utils/storage";
import ListFavorites from "./listFavorites";

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
                style={{ backgroundColor: '#00FF00' }}
                data={favorites}
                numColumns={2}
                renderItem={({ item }) => <ListFavorites data={item} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FF00',
    },
    tittle: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingBottom: 8,
        paddingLeft: 10,
    },
})