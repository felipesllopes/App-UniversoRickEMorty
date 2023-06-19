import { createDrawerNavigator } from "@react-navigation/drawer";
import CharactersRoutes from ".";
import Favorites from "../favorites";

export default function Routes() {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: 'lime',
                drawerInactiveTintColor: 'white',
                drawerStyle: { backgroundColor: '#101010' },
                drawerLabelStyle: {
                    fontSize: 17,
                    color: 'lime',
                },
                drawerItemStyle: {
                    borderRadius: 10,
                    marginTop: 10,
                }
            }}
        >

            <Drawer.Screen name="CharactersRoutes" component={CharactersRoutes}
                options={{ title: 'Lista de personagens' }}
            />

            <Drawer.Screen name="Favorites" component={Favorites}
                options={{ title: 'Personagens favoritos' }}
            />

        </Drawer.Navigator>
    )
}