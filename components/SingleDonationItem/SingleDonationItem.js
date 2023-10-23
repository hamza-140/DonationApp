import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, TouchableOpacity} from 'react-native';
import style from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
const SingleDonationItem = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle}></Badge>
        </View>
        <Image
          resizeMode={'cover'}
          source={{uri: props.uri}}
          style={style.image}></Image>
      </View>
      <View style={style.donationInfo}>
        <Header
          numberOfLines={1}
          title={props.donationTitle}
          type={3}
          color={'#0A043C'}></Header>
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}></Header>
        </View>
      </View>
    </TouchableOpacity>
  );
};

SingleDonationItem.defaultProp = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;
