import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import InputAuth from '../../components/InputAuth';
import {COLORS, FONTSIZE, SPACING, FONTFAMILY} from '../../theme/theme';
import {regexEmail} from '../../utils';
import {LoginStyles} from './Login.Style';
import {ErrorMessage} from './Message';

const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [isErrorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (text: string) => {
    setEmail(text);
    validateEmail(text);
  };
  const onChangePassword = (text: string) => {
    setPassword(text);
  };
  const validateEmail = (value: string) => {
    if (!regexEmail.test(value)) {
      setErrorEmail(ErrorMessage.EMAIL_INVALID);
    } else {
      setErrorEmail('');
    }
  };
  const login = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headerLogin}>
        <Text style={styles.title}>REGISTER</Text>
      </View>
      <View style={styles.inputAuth}>
        <InputAuth
          onChange={onChangeEmail}
          secure={false}
          name="Email"
          value={email}
          styles={LoginStyles.inputView}
        />
        <InputAuth
          onChange={onChangePassword}
          secure={true}
          name="Password"
          value={password}
          styles={LoginStyles.inputView}
        />
        <InputAuth
          onChange={onChangePassword}
          secure={true}
          name="Confirm Password"
          value={password}
          styles={LoginStyles.inputView}
        />
      </View>
      <View style={{marginTop: SPACING.space_36 * 4}}>
        <TouchableOpacity style={styles.buttonContanier}>
          <Text style={styles.textLogin}> Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRegister}>
        <Text style={{color: COLORS.White}}>Already have an account?</Text>
        <TouchableOpacity onPress={login}>
          <Text style={styles.textRegister}> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  headerLogin: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: SPACING.space_28 * 4,
  },
  title: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_14 * 3,
    fontFamily: FONTFAMILY.poppins_extrabold,
  },
  inputAuth: {
    height: 300,
    width: '90%',
    alignSelf: 'center',
  },
  buttonContanier: {
    backgroundColor: COLORS.Orange,
    alignSelf: 'center',
    borderRadius: 20,
  },
  textLogin: {
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_medium,
    alignSelf: 'center',
    paddingHorizontal: SPACING.space_24 * 3,
    paddingVertical: SPACING.space_20,
    color: COLORS.White,
  },
  difLogin: {
    marginTop: SPACING.space_36,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  textDfLogin: {
    color: COLORS.Orange,
    fontSize: FONTSIZE.size_8 * 2,
  },
  buttonRegister: {
    marginTop: SPACING.space_36 * 4,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  textRegister: {
    color: COLORS.Orange,
    fontSize: FONTSIZE.size_16,
  },
});
export default RegisterScreen;
