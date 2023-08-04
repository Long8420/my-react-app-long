import * as React from 'react';
import {Text, View, StyleSheet, StatusBar, Image} from 'react-native';
import AppHeader from '../components/AppHeader';
import SettingProfile from '../components/SettingProfile';
import {COLORS, SPACING, FONTSIZE, FONTFAMILY} from '../theme/theme';

const UserAccountScreen = ({navigation}: any) => {
  const login = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={'My Profile'}
          action={() => navigation.goBack()}
        />
      </View>
      <View style={styles.imgProfile}>
        <Image
          source={require('../assets/image/avatar.png')}
          style={styles.avatarImage}
        />
        <Text style={styles.textName}> John Doe</Text>
      </View>
      <View style={styles.settingContainer}>
        <SettingProfile icon="user" title="Account" onPress={login} />
        <SettingProfile icon="setting" title="Setting" />
        <SettingProfile icon="dollar" title="Offers & Referrails" />
        <SettingProfile icon="info" title="About" />
        <SettingProfile icon="logout" title="LogOut" />
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
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  imgProfile: {
    width: '25%',
    height: '15%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: SPACING.space_28 * 2,
  },
  avatarImage: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 60,
  },
  textName: {
    marginTop: SPACING.space_18,
    color: COLORS.White,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_semibold,
    alignSelf: 'center',
  },
  settingContainer: {
    flex: 1,
    marginLeft: SPACING.space_36,
    marginRight: SPACING.space_28,
    marginTop: SPACING.space_32,
  },
});

export default UserAccountScreen;
