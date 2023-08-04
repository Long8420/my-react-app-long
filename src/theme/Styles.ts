import {StyleSheet} from 'react-native';
import { COLORS, FONTSIZE } from './theme';

export const StylesTextInput = StyleSheet.create({
  recordInput: {
    marginHorizontal: '6%',
  },
  input: {
    marginTop: '10%',
    fontSize: FONTSIZE.size_20,
    height: 40,
    fontWeight: '500',
    borderBottomColor: COLORS.White,
    borderBottomWidth: 1,
    color: COLORS.White,
  },
  error: {
    color: COLORS.Orange,
    fontSize: 14,
    marginHorizontal: '6%',
  },
});
