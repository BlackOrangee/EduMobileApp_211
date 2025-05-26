import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import EditProfileScreen from '../screens/profile/EditProfileScreen.tsx';
import SettingsScreen from '../screens/settings/SettingsScreen';
import SingleForumScreen from '../screens/forum/SingleForumScreen.tsx';

// tabs
import BottomTab from './TabNavigation.tsx';

export type RootStackParamList = {
  LoginScreen: undefined;
  BottomTab: undefined;
  EditProfile: undefined;
  SettingsScreen: undefined;
  SingleForumScreen: undefined;
  // Products: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    //     @ts-ignore
    <Stack.Navigator initialRouteName="BottomTab">
      {/* tabs */}
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />

      {/* static screens */}
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{}}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{}}
      />

      {/* dynamic screens */}
      <Stack.Screen
        name="SingleForumScreen"
        component={SingleForumScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}
