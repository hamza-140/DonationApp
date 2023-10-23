import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  image: {
    height: verticalScale(170),
    width: horizontalScale(140),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  donationInfo: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});
export default style;
