import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import COLORS from '../constants/Colors';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor={COLORS.backgroundColor} />
      <View style = {styles.headerContainer}> 
      <Text style={styles.headerTitle} > Now Playing</Text>
      <Text style={styles.headerSubTitle}> VIEW ALL</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND
  },
  headerContainer :{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical:10

  },
  headerTitle : {
      fontSize: 28,

  },
  headerSubTitle : {
      fontSize: 13,
      color: COLORS.ACTIVE
  }
});

export default HomeScreen;