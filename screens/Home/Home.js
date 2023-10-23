import React, {useState, useEffect} from 'react';
import style from './style';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState} from '../../redux/reducers/User';
import {horizontalScale} from '../../assets/styles/scaling';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {updateSelectedDonationId} from '../../redux/reducers/Donation';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const categoryPageSize = 4;
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donation);
  const dispatch = useDispatch();
  const [donationItems, setDonationItems] = useState([]);
  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Header title={'Hello,'} type={3} color={'grey'}></Header>
            <View style={style.username}>
              <Header
                title={
                  user.firstName + ' ' + user.lastName[0] + '. 👋'
                }></Header>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/profile.jpg')}
            style={style.img}></Image>
        </View>
        <View style={style.searchBox}>
          <Search></Search>
        </View>
        <TouchableOpacity style={style.highlightedImgContainer}>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/highlighted-image.png')}
            style={style.highlightedImg}></Image>
        </TouchableOpacity>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2}></Header>
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={
                    item.categoryId !== categories.selectedCategoryId
                  }></Tab>
              </View>
            )}></FlatList>
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.Donation, {
                        categoryInformation,
                      });
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    donationTitle={value.name}
                    badgeTitle={categoryInformation.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
