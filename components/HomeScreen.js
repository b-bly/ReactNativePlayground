import {
  View,
  Text,
  Button,
} from 'react-native';


export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>The home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  )
}