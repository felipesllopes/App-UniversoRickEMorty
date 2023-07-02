import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../favorites";
import DetailsFavorites from "../favorites/DetailsFavorites";

export default function FavoritesRoutes() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>

            <Stack.Screen name="Favorites" component={Favorites}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="DetailsFavorites" component={DetailsFavorites}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}