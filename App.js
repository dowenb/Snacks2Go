import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.searchContainer}>
          <Text style={{ color: colors.darkGreen, fontSize: 16 }}>Search</Text>
        </View>
        <View style={styles.mapContainer}>
          <Text style={{ color: colors.white, fontSize: 16 }}>List of snack shops</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: colors.yoshiGreen,
    alignItems: 'left',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#000',
    alignItems: 'left',
    justifyContent: 'top',
  },
});
