import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 500 }}>
          Hello React Native
        </Text>
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
        ></Button>
        <Button
          title="List Page"
          onPress={() => navigation.navigate("List")}
        ></Button>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89CFF0",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
});
