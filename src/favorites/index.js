import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Lista from "../home/Lista";
import { getFavorites } from "../utils/storage";

export default function Favorites() {

    const [favorites, setFavorites] = useState();

    useEffect(() => {
        (async () => {
            let fav = await getFavorites("@apprickandmorty");
            setFavorites(await fav);
        })();
    }, [favorites])

    return (
        <View style={styles.container}>

            <FlatList
                style={{ backgroundColor: '#555' }}
                data={favorites}
                numColumns={2}
                renderItem={({ item }) => <Lista data={item} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FF00',
    }
})