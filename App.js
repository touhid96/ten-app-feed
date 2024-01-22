import { SafeAreaView, StyleSheet } from "react-native";
import Feed from "./components/feed";
import NavigationBar from "./components/folloebar";
import Header from "./components/navbar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Feed></Feed>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
