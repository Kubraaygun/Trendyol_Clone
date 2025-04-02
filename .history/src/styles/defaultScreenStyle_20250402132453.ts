import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

const defaultScreenStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.WHITE,
  },
});
export {defaultScreenStyles};
