import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  containerImg: {
    marginTop: verticalScale(12),
    width: '100%',
    borderRadius: horizontalScale(5),
    height: verticalScale(240),
    marginBottom: verticalScale(24),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    color: 'black',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(10),
  },
});
export default style;
