import {
  View,
  Text,
  Button,
} from 'react-native';
// import TrackPlayer from 'react-native-track-player';
import React from 'react';
import styles from './styles';
import TrackPlayer from 'react-native-track-player';



export default ({ navigation }) => {
  const play = () => {
    TrackPlayer.play();
  }
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>The home screen</Text>
        <Button
          title="Play"
          onPress={play.bind(this)}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  )
}



// const start = async () => {
//     // Set up the player
//     await TrackPlayer.setupPlayer();

//     const id = 'A9sOb_r6Hy0';

//     // Add a track to the queue
//     await TrackPlayer.add({
//         id: 'trackId',
//         url: 'https://www.youtube.com/watch?v=A9sOb_r6Hy0',
//         title: 'Track Title',
//         artist: 'Track Artist',
//         artwork: 'https://img.youtube.com/vi/' + id + '/default.jpg'
//     });

//     // Start playing it
//     await TrackPlayer.play();
// };
// start();