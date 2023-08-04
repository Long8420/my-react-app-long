import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import AppHeader from '../../components/AppHeader';
import { SPACING } from '../../theme/theme';


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader name="close" header={'My Profile'}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
});
export default LoginScreen;
