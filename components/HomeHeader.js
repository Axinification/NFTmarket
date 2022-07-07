import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
    // Bar background
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      
      <View
      // Bar container
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
        //Logo 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 140, height: 70 }}
        />

        <View style={{ width: 75, height: 75 }}>
          <Image
          // Avatar
            source={assets.avatar01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
          // Validation badge
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 30,
              height: 30,
              bottom: -5,
              right: -5,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
        // First text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          Hello Victoria 👋
        </Text>

        <Text
        // Second text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
            textAlign: "center",
          }}
        >
          Let’s find a masterpiece!
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
        // Searchbar container
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.search,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
          // Search icon
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
          // Search text
            placeholder="Search NFTs"
            style={{ flex: 1, fontSize: SIZES.medium }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
