import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Userdata = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  return (
    <View>
      <FlatList
        data={user}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} style={styles.image}></Image>
            <Text>{item.price}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Userdata;

const styles = StyleSheet.create({
  feedWrapper: {
    flex: 1,
    //borderWidth: 2,
  },
  postHeader: {
    //borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 30,
    paddingBottom: 39,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeaderRight: {
    //borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  followButton: {
    height: 32,
    backgroundColor: colors.ovals,
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  followButtonText: {
    //paddingHorizontal: 20,
  },
  threeDotsIcon: {
    marginLeft: 10,
    color: colors.text,
  },
  profilePictureContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.containerColor,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePictureIcon: {
    height: "100%",
    width: "100%",
  },
  userInfo: {
    paddingLeft: 17,
  },
  dateAndReadTimeWrapper: {
    //borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameText: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  dateText: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
  readTimeText: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    marginLeft: 15,
  },
  postImageContainer: {
    height: 245,
    //borderWidth: 2,
    marginBottom: 23,
  },
  postImage: {
    //borderWidth: 2,
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 6,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  postTitleWrapper: {
    //borderWidth: 2,
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 32,
    paddingRight: 13,
    paddingTop: 5,
    paddingBottom: 19,
  },
  postTitleText: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    paddingTop: 4,
    //width: "100%",
  },
  postTag: {
    backgroundColor: colors.ovals,
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 17,
    marginRight: 17,
  },
  postTagText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
  postTextWrapper: {
    //borderWidth: 2,
    paddingLeft: 30,
    paddingRight: 18,
  },
  postTextText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    textAlign: "justify",
  },
  reactionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 18,
    paddingTop: 12,
    paddingBottom: 40,
  },
  reactionLeft: {
    flexDirection: "row",
  },
  reactionRight: {},
  reactionIcon: {
    color: colors.text,
  },
  commentIcon: {
    color: colors.text,
    paddingLeft: 5,
  },
  bookmarkIcon: {
    color: colors.text,
  },
});
