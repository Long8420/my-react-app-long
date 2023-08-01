import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  BORDERRADIUS,
  SPACING,
  FONTFAMILY,
  FONTSIZE,
  COLORS,
} from '../theme/theme';

const CastCard = (props: any) => {
  return (
    <View
      style={[
        styles.container,
        props.shouldMarginatedAtEnd
          ? props.isFirst
            ? {marginLeft: SPACING.space_24}
            : props.isLast
            ? {marginRight: SPACING.space_24}
            : {}
          : {},
        {maxWidth: props.cardWidth},
      ]}>
      <Image
        style={[styles.cardImage, {width: props.cardWidth}]}
        source={{uri: props.imagePath}}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subTitle}>{props.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardImage: {
    aspectRatio: 1928 / 2880,
    borderRadius: BORDERRADIUS.radius_25 * 4,
  },
  title: {
    alignSelf: 'stretch',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.White,
  },
  subTitle: {
    alignSelf: 'stretch',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.White,
  },
});
export default CastCard;
