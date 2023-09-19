import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Favorites from "../favorites";
import Home from "../home";

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
                headerStyle: { backgroundColor: '#101010' }
            }}
        >

            <Drawer.Screen name="Home" component={Home}
                options={{ title: 'Lista de Personagens' }}
            />

            <Drawer.Screen name="Favorites" component={Favorites}
                options={{ title: 'Personagens Favoritos' }}
            />

        </Drawer.Navigator>
    )
}