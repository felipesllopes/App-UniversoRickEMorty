import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Routes />
      <StatusBar backgroundColor={'#888'} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
