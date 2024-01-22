import { SafeAreaView, StyleSheet } from "react-native";

export default function Feeder() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
