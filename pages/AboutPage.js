import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function AboutPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Button
            title="Home Page"
            onPress={() => navigation.navigate("Home")}
          ></Button>
          <Button
            title="List Page"
            onPress={() => navigation.navigate("List")}
          ></Button>
          <Image
            source={require("../assets/butterfly.jpeg")}
            style={{
              //   borderColor: "#eee",
              borderWidth: 1,
              width: 370,
              height: 400,
              alignSelf: "center",
            }}
          />
          <Text style={{ marginTop: 20 }}>
            Butterflies are winged insects from the lepidopteran suborder
            Rhopalocera, characterized by large, often brightly coloured wings
            that often fold together when at rest, and a conspicuous, fluttering
            flight. The group comprises the superfamilies Hedyloidea and
            Papilionoidea.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 48,
  },
});
