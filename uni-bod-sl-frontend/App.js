import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login'
import SearchResult from './screens/SearchResult';
import CreatePost from './screens/CreatePost';
import AdContext from './context/AdvertisementContext'
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [AdList, setAdList] = useState([])

  return (
    <AdContext.Provider value={{AdList,setAdList}} >
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Login" component={Login}/> */}
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name="SearchResult" component={SearchResult}/>
          <Stack.Screen name="CreatePost" component={CreatePost} />
        </Stack.Navigator>
      </NavigationContainer>
    </AdContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
