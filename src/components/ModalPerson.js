import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { adcFavorite, isFavorite, rmvFavorite } from "../utils/storage";
import { useMyContext } from "./Context/Context";

export default function ModalPerson({ data, close }) {

    const [favorite, setFavorite] = useState(null);
    const { setReload } = useMyContext();

    useEffect(() => {
        (async () => {
            setFavorite(await isFavorite(data));
        })();
    }, [favorite])

    async function handleFavorite() {
        if (favorite) {
            await rmvFavorite(data.id);
            setFavorite(false)
        } else {
            await adcFavorite(data);
            setFavorite(true)
        }
    }

    function handleClose() {
        close()
        setReload(current => (current ? false : true))
    }

    return (
        <Screen>
            <Wallpaper source={require('../img/wallpaper.jpg')}>
                <Back name="close" size={30} onPress={handleClose} />

                <Name style={{}}> - {data.name}</Name>

                <Image source={{ uri: data.image }} />

                <Specie>Espécie: {data.species}</Specie>

                <ViewInformation>
                    <Information>Localização: {data.location.name}</Information>
                    <Information>Origem: {data.origin.name}</Information>
                    <Information>Id: {data.id}</Information>

                    <Favorite
                        name={favorite ? "bookmark" : "bookmark-outline"}
                        size={26}
                        onPress={handleFavorite} />
                </ViewInformation>

            </Wallpaper>
        </Screen>
    )
}

const Screen = styled.View`
flex: 1;
background-color: rgba(0,0,0,0.8);
justify-content: center;
`;

const Wallpaper = styled.ImageBackground`
margin: 60px 40px;
padding: 15px;
`;

const Back = styled(Ionicons)`
align-self: flex-end;
padding: 5px;
position: absolute;
`;

const Name = styled.Text`
font-size: 19px;
font-weight: bold;
background-color: #D8FBD8;
border-width: 2px;
border-radius: 10px;
padding: 0 5px;
margin-top: 30px;
`;

const Image = styled.Image`
width: 100%;
height: auto;
aspect-ratio: 1;
border-radius: 6px;
`;

const Specie = styled.Text`
background-color: #FFF8DC;
font-size: 17px;
font-weight: bold;
border-width: 2px;
border-radius: 10px;
padding: 1px 20px;
`;

const ViewInformation = styled.View`
background-color: #FFF;
border-width: 2px;
padding: 1px 10px 20px;
margin: 0 6px 10px;
`;

const Information = styled.Text`
font-size: 17px;
`;

const Favorite = styled(Ionicons)`
bottom: 6px;
position: absolute;
right: 6px;
`;