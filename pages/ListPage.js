import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

export default function ListPage({ navigation }) {
  const handlePress = (item) => {
    console.log("Pressed:", item.title);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Home Page"
        onPress={() => navigation.navigate("Home")}
      ></Button>
      <Button
        title="About Page"
        onPress={() => navigation.navigate("About")}
      ></Button>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <Text
              style={{
                padding: 16,
                fontSize: 20,
                backgroundColor: "#89CFF0",
                margin: 2,
              }}
            >
              {item.title}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "Monarch butterfly",
  },
  {
    id: "2",
    title: "Painted lady",
  },
  {
    id: "3",
    title: "Red admiral",
  },
  {
    id: "4",
    title: "Mourning cloak",
  },
  {
    id: "5",
    title: "Cabbage white",
  },
  {
    id: "6",
    title: "Eastern tiger swallowtail",
  },
  {
    id: "7",
    title: "Menelaus blue morpho",
  },
  {
    id: "8",
    title: "Zebra Longwing Butterfly",
  },
  {
    id: "9",
    title: "Large white",
  },
  {
    id: "10",
    title: "Glasswing Butterfly",
  },
  {
    id: "11",
    title: "Peacock Butterfly.",
  },
  {
    id: "12",
    title: "Swallowtail Butterfly",
  },
  {
    id: "13",
    title: "Birdwing Butterfly",
  },
  {
    id: "14",
    title: "Apollo Butterfly",
  },
  {
    id: "15",
    title: "Rajah Brooke's Birdwing",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
});
