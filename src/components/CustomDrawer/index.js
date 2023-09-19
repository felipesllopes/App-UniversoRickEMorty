import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import styled from "styled-components/native";

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>

            <ImageLogo source={require('../../img/rickandmorty.png')}
                resizeMode="contain"
            />

            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}

const ImageLogo = styled.Image`
width: 90%;
height: auto;
aspect-ratio: 1;
align-self: center;
margin: 10px 0 20px;
`;
