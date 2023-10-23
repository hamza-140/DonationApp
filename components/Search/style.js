import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  search: {
    marginLeft: horizontalScale(6),
    flex: 1,
    height: '100%',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#686C7A',
  },
  container: {
    borderRadius: horizontalScale(15),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    alignItems: 'center',
  },
});
export default style;
