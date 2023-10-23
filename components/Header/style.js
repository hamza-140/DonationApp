import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    color: 'black',
    lineHeight: scaleFontSize(29),
    fontWeight: 'bold',
    fontSize: scaleFontSize(24),
  },
  title2: {
    fontFamily: 'Inter',
    color: 'black',
    lineHeight: scaleFontSize(22),
    fontWeight: 'bold',
    fontSize: scaleFontSize(18),
  },
  title3: {
    fontFamily: 'Inter',
    color: 'black',
    lineHeight: scaleFontSize(19),
    fontWeight: 'bold',
    fontSize: scaleFontSize(16),
  },
});

export default style;
