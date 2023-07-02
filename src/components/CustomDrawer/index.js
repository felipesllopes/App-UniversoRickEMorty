import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, StyleSheet, View } from "react-native";

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Image source={require('../../img/tittle.png')}
                    style={styles.tittle}
                />

                <Image source={require('../../img/walp.png')}
                    style={styles.igm}
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
    igm: {
        height: 250,
        width: 250,
        marginTop: 5,
    },
})