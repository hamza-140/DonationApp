import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';
const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <TouchableOpacity
      style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]}
      onPress={() => props.onPress(props.tabId)}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

Tab.defaultProps = {
  isInactive: false,
  onPress: () => {},
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  tabId: PropTypes.number.isRequired,
};
export default Tab;
