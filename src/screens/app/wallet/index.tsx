import React, {useState} from 'react';
import {FlatList, ScrollView, TextInput} from 'react-native';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {images} from '~assets/images';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';

const data = [
  {
    name: 'Mobile recharge',
    icon: images.banking,
  },
  {
    name: 'Send to Paygam-Wallet',
    icon: images.sync,
  },
  {
    name: 'SEND Remittance',
    icon: images.credit,
  },
  {
    name: 'Account and Card',
    icon: images.wallet,
  },
  {
    name: 'CASH POWER',
    icon: images.seo,
  },
  {
    name: 'EXCHANGE Rate',
    icon: images.exchange,
  },
  {
    name: 'Transaction report',
    icon: images.paragraph,
  },
  {
    name: 'Bank Deposit',
    icon: images.group,
  },
  {
    name: 'Paygam MarketPlace',
    icon: images.card,
  },
];
const Wallet = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState('Religion done');

  return (
    <ScreenWrapper translucent barStyle="dark-content" scrollType="scroll">
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.avatar} style={styles.profileImage} />
            <View style={{marginLeft: 8}}>
              <Text style={styles.headerText}>Hi, jon ?</Text>
              <Text style={[styles.headerText1]}>Welcome back</Text>
            </View>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenNames.Settings)}>
              <Image
                source={images.qr2}
                style={{height: 27, width: 30}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Image
              source={images.dots}
              style={{marginLeft: 8, height: 25, width: 8}}
              resizeMode="contain"
            />
          </View>
        </View>
        <FlatList
          horizontal
          data={[
            {
              wallet: 'GMD Wallet',
              name: 'D 2445',
              detail: ' 123 456 789 123',
            },
            {
              wallet: 'GMD Wallet',
              name: 'D 2445',
              detail: ' 123 456 789 123',
            },
            {
              wallet: 'GMD Wallet',
              name: 'D 2445',
              detail: ' 123 456 789 123',
            },
          ]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.charityDetailContainer} key={index}>
                <TouchableOpacity style={styles.charityDetailCard}>
                  <Text style={styles.charityDetailName}>{item?.wallet}</Text>
                  <Text style={[styles.charityDetailAccount, {fontSize: 20}]}>
                    {item.name}
                  </Text>
                  <Text style={styles.charityDetailAccount}>Wallet no.</Text>
                  <Text style={styles.charityDetailAccount}>{item.detail}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <Text style={styles.charitiesTitle}>Functions</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.charityCard}
                onPress={() => navigation.navigate(ScreenNames.Dashboard)}>
                <View style={styles.charityIcon}>
                  <Image source={item?.icon} style={styles.iconImage} />
                </View>
                <Text style={styles.charityName}>{item?.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 17,
    paddingTop: 25,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 16,
    color: '#333',
  },
  headerText1: {
    fontSize: 14,
    color: '#333',
    fontFamily: FontFamily.appFontLight,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
  },
  threeDots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  searchTitle: {
    fontSize: 14,
    fontFamily: FontFamily.appFontSemiBold,
    fontWeight: 'bold',
    color: '#FF0000',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  categoryButton: {
    padding: 8,
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 100,
    elevation: 2,
    marginBottom: 8,
  },
  categoryButtonText: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
  },
  charitiesTitle: {
    fontSize: 18,
    color: '#333',
    padding: 16,
    fontFamily: FontFamily.appFontMedium,
    letterSpacing: 1,
    alignSelf: 'center',
    marginTop: 16,
  },
  charitiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  charityCard: {
    width: width(30),
    height: width(30),
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 7,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 2,
    margin: 5,
  },
  charityIcon: {
    width: 55,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  charityName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontFamily: FontFamily.appFontMedium,
    marginBottom: 4,
  },
  charityDetailContainer: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: width(95),
  },
  charityDetailCard: {
    marginLeft: 10,
    width: width(90),
    backgroundColor: '#3A66BD',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    marginVertical: 3,
  },
  charityDetailIcon: {
    marginRight: 15,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  charityDetailName: {
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 5,
    color: '#fff',
    fontFamily: FontFamily.appFontMedium,
    marginBottom: 7,
    letterSpacing: 1.2,
  },
  charityDetailAccount: {
    fontSize: 14,
    marginBottom: 4,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Wallet;
