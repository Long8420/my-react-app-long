import {View} from 'react-native';
import Input from './TextInput';

type Props = {
  name?: string;
  styles?: any;
  value?: string;
  secure?: boolean;
  onPress?: (text: string) => void;
  onChange: (text: string) => void;
  editable?: boolean;
  selectTextOnFocus?: boolean;
};

const InputAuth = (props: Props) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={props.styles}>
      <Input
        onChange={props.onChange}
        secureTextEntry={props.secure}
        nameInput={props.name || ''}
        value={props.value}
        editable={props.editable}
        selectTextOnFocus={props.selectTextOnFocus}
      />
    </View>
  );
};

export default InputAuth;
