import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTSIZE, FONTFAMILY, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface settingProps {
  icon: string;
  title: string;
  onPress?: () => void;
}

const SettingProfile = (props: settingProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.itemLeft}>
        <CustomIcon
          name={props.icon}
          color={COLORS.White}
          size={FONTSIZE.size_24}
        />
        <Text style={styles.textTitle}>{props.title}</Text>
      </View>
      <View style={styles.itemRight}>
        <CustomIcon
          name="arrow-right"
          color={COLORS.White}
          size={FONTSIZE.size_24}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.space_20,
  },
  textTitle: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_regular,
    marginLeft: SPACING.space_32,
  },
  itemLeft: {
    width: '90%',
    height: 45,
    display: 'flex',
    flexDirection: 'row',
  },
  itemRight: {
    marginTop: SPACING.space_8,
    marginLeft: SPACING.space_20,
  },
});
export default SettingProfile;
