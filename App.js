import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor={'#888'} />
    </NavigationContainer>
  );
}
