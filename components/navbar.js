import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <Ionicons name="menu-sharp" size={30} color={colors.text} />
          <Text style={styles.tenText}>TEN</Text>
        </View>
        <View style={styles.headerRight}>
          <Feather name="plus" size={28} style={styles.plusIcon} />
          <Feather name="search" size={24} style={styles.searchIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    //borderWidth: 2,
    width: "100%",
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  tenText: {
    fontFamily: "Inter-Medium",
    fontSize: 20,
    color: colors.text,
    paddingLeft: 13,
  },
  plusIcon: {
    paddingRight: 23,
    color: colors.circles,
  },
  searchIcon: {
    color: colors.circles,
  },
});
