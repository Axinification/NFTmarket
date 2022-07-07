import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
        ...SHADOWS.light,
      }}
    />
  );
};

export const People = ({ bids }) => {
  const bidsArray = Object.values(bids)[0]
  if(bidsArray.length > 2) {
    return (
        <View style={{ flexDirection: "row" }}>
            {[bidsArray[bidsArray.length-1].image, bidsArray[bidsArray.length-2].image, bidsArray[bidsArray.length-3].image].map(
              (imgUrl, index) => (
                <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
              )
            )}
        </View>
    );
  } else if (bidsArray.length == 2) {
    return (
      <View style={{ flexDirection: "row" }}>
          {[bidsArray[bidsArray.length-1].image, bidsArray[bidsArray.length-2].image].map(
            (imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
            )
          )}
      </View>
    );
  } else if (bidsArray.length == 1) {
    return (
      <View style={{ flexDirection: "row" }}>
          {[bidsArray[bidsArray.length-1].image].map(
            (imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
            )
          )}
      </View>
    );
  } else { return null; }
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12:31
      </Text>
    </View>
  );
};

export const SubInfo = (bids) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People bids={bids}/>
      <EndDate />
    </View>
  );
};
