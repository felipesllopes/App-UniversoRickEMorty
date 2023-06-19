import { createDrawerNavigator } from "@react-navigation/drawer";
import CharactersRoutes from ".";
import Favorites from "../favorites";

export default function Routes() {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: '#00FF00',
                headerTintColor: '#00FF00',
                drawerActiveBackgroundColor: '#008000',
                drawerInactiveTintColor: '#FFF',
                drawerStyle: { backgroundColor: '#101010' },
                drawerLabelStyle: {
                    fontSize: 17,
                    color: '#00FF00',
                },
                drawerItemStyle: {
                    borderRadius: 10,
                    marginTop: 10,
                },
                headerStyle: { backgroundColor: '#000' },
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