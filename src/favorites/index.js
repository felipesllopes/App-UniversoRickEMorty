import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
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
        <Container>

            <FavoritesList
                data={favorites.sort((a, b) => a.id - b.id)}
                numColumns={2}
                renderItem={({ item }) => <Lista data={item} />}
            />

        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #32CD32;
`;

const FavoritesList = styled.FlatList``;
