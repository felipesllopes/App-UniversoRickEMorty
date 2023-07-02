import { createDrawerNavigator } from "@react-navigation/drawer";
import CharactersRoutes from ".";
import FavoritesRoutes from "./favorites";
import CustomDrawer from "../components/CustomDrawer";

export default function Routes() {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawer {...props} />}

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
            }}
        >

            <Drawer.Screen name="CharactersRoutes" component={CharactersRoutes}
                options={{ headerShown: false, title: 'Lista de Personagens' }}
            />

            <Drawer.Screen name="FavoritesRoutes" component={FavoritesRoutes}
                options={{ headerShown: false, title: 'Personagens Favoritos' }}
            />

        </Drawer.Navigator>
    )
}