import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, StyleSheet, View } from "react-native";

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>

                <Image source={require('../../img/rickandmorty.png')}
                    style={styles.img}
                    resizeMode="cover"
                />

            </View>

            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tittle: {
        width: 256,
        height: 80,
        marginVertical: 10,
    },
    img: {
        height: 258,
        width: 216,
        marginTop: 12,
    },
})