import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    height: verticalScale(44),
    width: verticalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(50) / 2,
  },
});
export default style;
