import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../favorites";
import DetailsItem from "../home/Lista/DetailsItem";

export default function FavoritesRoutes() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>

            <Stack.Screen name="Favorites" component={Favorites}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="DetailsItem" component={DetailsItem}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}