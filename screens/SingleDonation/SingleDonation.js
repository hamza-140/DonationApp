import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonation = ({navigation, route}) => {
  const donationInformation = useSelector(
    state => state.donation.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={navigation.goBack}></BackButton>
        <Image
          source={{uri: donationInformation.image}}
          style={style.containerImg}></Image>
        <View style={style.badge}>
          <Badge title={route.params.categoryInformation.name}></Badge>
        </View>
        <Header type={1} title={donationInformation.name}></Header>
        <Text style={style.description}>{donationInformation.description}</Text>
      </ScrollView>
      <View style={style.button}>
        <Button title="Donate"></Button>
      </View>
    </SafeAreaView>
  );
};

export default SingleDonation;
