import React, {useState} from 'react';
import {
  View,
  TextInput,
  Animated,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {StylesTextInput} from '../theme/Styles';

type Props = {
  value?: string;
  nameInput: string | number;
  secureTextEntry?: boolean;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  styleInput?: StyleProp<ViewStyle>;
  onChange: (text: string) => void;
};
export interface LabelStyle {
  position: 'absolute';
  top: number | Animated.AnimatedInterpolation<string>;
  fontSize: number | Animated.AnimatedInterpolation<string>;
  color: string | Animated.AnimatedInterpolation<number>;
}

const Input = (props: Props) => {
  const animatedLabelTranslate = new Animated.Value(
    props.value === '' || props.value === undefined ? 0 : 1,
  );
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChangeText = (text: string) => {
    props.onChange(text);
    Animated.timing(animatedLabelTranslate, {
      toValue: text === '' ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle: LabelStyle = {
    position: 'absolute',
    top: animatedLabelTranslate.interpolate({
      inputRange: [0, 1],
      outputRange: [isFocused || props.value ? '15%' : '55%', '15%'],
    }),
    fontSize: animatedLabelTranslate.interpolate({
      inputRange: [0, 1],
      outputRange: [isFocused || props.value ? 14 : 16, 14],
    }),
    color: animatedLabelTranslate.interpolate({
      inputRange: [0, 1],
      outputRange: ['#fff', isFocused || props.value ? '#fff' : '#fff'],
    }),
  };
  return (
    <View style={[StylesTextInput.recordInput, props.styleInput]}>
      <Animated.Text style={labelStyle}>{props.nameInput}</Animated.Text>
      <TextInput
        style={StylesTextInput.input}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={props.editable}
        selectTextOnFocus={props.selectTextOnFocus}
      />
    </View>
  );
};
export default Input;
