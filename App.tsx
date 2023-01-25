/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import AppBar from './src/components/AppBar';
import Menu from './src/components/Menu';
import {Provider} from 'react-redux';
import store from './src/redux/store';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
export const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    primary: 'rgb(73, 81, 195)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(224, 224, 255)',
    onPrimaryContainer: 'rgb(0, 0, 110)',
    secondary: 'rgb(92, 93, 114)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(225, 224, 249)',
    onSecondaryContainer: 'rgb(25, 26, 44)',
    tertiary: 'rgb(120, 83, 107)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(255, 216, 238)',
    onTertiaryContainer: 'rgb(46, 17, 38)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(27, 27, 31)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(27, 27, 31)',
    surfaceVariant: 'rgb(228, 225, 236)',
    onSurfaceVariant: 'rgb(70, 70, 79)',
    outline: 'rgb(119, 118, 128)',
    outlineVariant: 'rgb(199, 197, 208)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(48, 48, 52)',
    inverseOnSurface: 'rgb(243, 239, 244)',
    inversePrimary: 'rgb(191, 194, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(246, 243, 252)',
      level2: 'rgb(240, 237, 250)',
      level3: 'rgb(235, 232, 248)',
      level4: 'rgb(233, 231, 248)',
      level5: 'rgb(230, 227, 247)',
    },
    surfaceDisabled: 'rgba(27, 27, 31, 0.12)',
    onSurfaceDisabled: 'rgba(27, 27, 31, 0.38)',
    backdrop: 'rgba(48, 48, 56, 0.4)',
  },
};

function App(): JSX.Element {
  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme as unknown as Theme}>
          <SafeAreaView style={backgroundStyle}>
            <AppBar title="AcnBook" />
          </SafeAreaView>
          <Menu />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
