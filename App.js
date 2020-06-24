import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  AppState
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import styles from './styles';
import TrackPlayer from 'react-native-track-player'; // TODO remove temp code


// var track = {
//   id: 'unique track id', // Must be a string, required
//   url: 'http://example.com/avaritia.mp3', // Load media from the network
//   title: 'Avaritia',
//   artist: 'deadmau5',
//   album: 'while(1<2)',
//   genre: 'Progressive House, Electro House',
//   date: '2014-05-20T07:00:00+00:00', // RFC 3339

//   artwork: 'http://example.com/avaritia.png' // Load artwork from the network
// };
const id = 'A9sOb_r6Hy0';

const SC_KEY = 'H2c34Q0E7hftqnuDHGsk88DbNqhYpgMm'; 
const streamUrl = (trackUrl) => `${trackUrl}/stream?client_id=${SC_KEY}`;

const LAST_KEY = '33e34dd34310490d14ec0708a2b6290d';
const lastStreamUrl = (trackUrl) => `${trackUrl}?client_id=${LAST_KEY}`;

// https://api.soundcloud.com/tracks/253512663/stream?client_id=H2c34Q0E7hftqnuDHGsk88DbNqhYpgMm
// https://api.soundcloud.com/tracks/190614417/stream?client_id=H2c34Q0E7hftqnuDHGsk88DbNqhYpgMm

const track = {
  id: '1',
  url: streamUrl('https://api.soundcloud.com/tracks/253512663'),
  title: 'Track Title',
  artist: 'Track Artist',
  // artwork: 'https://img.youtube.com/vi/' + id + '/default.jpg'
}

const track2 = {
  id: '2',
  url: require('./aimyon-atarinosekai.mp3'),
  title: 'Atari No Sekai',
  artist: 'Aimyon'
};


const track3 = {
  id: '2',
  url: lastStreamUrl('https://www.last.fm/music/Cher/_/Believe'),
  title: 'Atari No Sekai',
  artist: 'Aimyon'
};

const tracks = [];
tracks.push(track3);

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  const _handleAppStateChange = (appState) => {
    if (appState == 'active') {
      // Updates the playback information when the app is back from background mode
      // App.store.dispatch(updatePlayback());
      console.log('state changed')
    }
  }

  const setUpPlayer = async () => {
    TrackPlayer.setupPlayer().then(() => {
      // The player is ready to be used
      console.log('setup')

      TrackPlayer.add(tracks).then(async function () {
        // The tracks were added
        console.log('tracks added')
        // await TrackPlayer.play()

        // TrackPlayer.updateOptions({
        //   capabilities: [
        //     TrackPlayer.CAPABILITY_PLAY,
        //     // TrackPlayer.CAPABILITY_PAUSE,
        //     // TrackPlayer.CAPABILITY_SEEK_TO,
        //     // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        //     // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
        //   ]
        // });
      });
    });
  }


  // setUpPlayer();

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  return (

      <NavigationContainer>


        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
