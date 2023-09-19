import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useMyContext } from "../components/Context/Context";
import Lista from "../home/Lista";
import { getFavorites } from "../utils/storage";

export default function Favorites() {

    const [favorites, setFavorites] = useState([]);
    const { reload } = useMyContext();

    useEffect(() => {
        (async () => {
            setFavorites(await getFavorites("@apprickandmorty"));
        })();
    }, [reload])

    function handleRenderList({ item }) {
        return (<Lista data={item} />)
    }

    return (
        <Container>

            <FavoritesList
                data={favorites.sort((a, b) => a.id - b.id)}
                numColumns={2}
                renderItem={handleRenderList}
            />

        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #32CD32;
`;

const FavoritesList = styled.FlatList``;
