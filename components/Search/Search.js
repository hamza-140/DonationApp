import React, {useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {scaleFontSize} from '../../assets/styles/scaling';
import PropTypes from 'prop-types';
const Search = props => {
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const [search, setSearch] = useState('');
  const textInputRef = useRef(null);
  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  return (
    <TouchableOpacity style={style.container} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}></FontAwesomeIcon>
      <TextInput
        value={search}
        onChangeText={value => {
          handleSearch(value);
        }}
        placeholder="Search"
        ref={textInputRef}
        style={style.search}></TextInput>
    </TouchableOpacity>
  );
};

Search.defaultProps = {
  onSearch: () => {},
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
