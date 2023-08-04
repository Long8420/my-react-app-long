import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  buttonModal: {
    flexDirection: 'row',
    marginTop: '5%',
    width: '85%',
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 2,
  },
  buttonRegister: {
    flexDirection: 'row',
    marginTop: '20%',
    width: '90%',
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 2,
  },
  containerContent: {
    width: '100%',
    alignItems: 'center',
  },
  inputView: {
    marginTop: '10%',
    width: '100%',
  },
  textViewBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textQuestion: {
    fontWeight: '500',
    // color: Colors.lighter,
    fontSize: 14,
  },
  textSpecial: {
    fontWeight: '500',
    // color: Colors.primary,
    marginLeft: 10,
    fontSize: 14,
  },
  viewError: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
  },
  textError: {
    // color: Colors.red200,
    fontSize: 16,
  },
  viewSpecial: {
    flexDirection: 'row',
    width: '90%',
    marginTop: '10%',
    justifyContent: 'space-between',
  },
  textSpecial500: {
    fontWeight: '500',
    // color: Colors.primary,
    fontSize: 16,
  },
});
