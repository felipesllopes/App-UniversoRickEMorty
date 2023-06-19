import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../home";
import DetailsItem from "../home/Lista/DetailsItem";

export default function CharactersRoutes() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>

            <Stack.Screen name="Home" component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="DetailsItem" component={DetailsItem}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}