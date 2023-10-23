import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';
const Button = props => {
  return (
    <TouchableOpacity
      style={[style.button, props.isDisabled && style.disabled]}
      disabled={props.isDisabled}
      onPress={() => props.onPress()}>
      <Text style={style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};
export default Button;
