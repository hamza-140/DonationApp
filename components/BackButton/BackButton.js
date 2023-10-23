import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import style from './style';
const BackButton = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} color="black"></FontAwesomeIcon>
    </TouchableOpacity>
  );
};

export default BackButton;
