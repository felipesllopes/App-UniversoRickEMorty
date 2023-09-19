import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { MyProvider } from './src/components/Context/Context';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <MyProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar backgroundColor={'#888'} />
      </NavigationContainer>
    </MyProvider>
  );
}
