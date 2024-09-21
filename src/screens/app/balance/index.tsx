import React, {useState} from 'react';
import {FlatList, ScrollView, TextInput} from 'react-native';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {images} from '~assets/images';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';

const Balance = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState('Religion done');

  return (
    <ScreenWrapper translucent barStyle="dark-content" scrollType="scroll">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerText1]}>Total balance</Text>
          <Text style={styles.headerText}>$24 986</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={images.menu}
            style={{
              width: width(10),
              height: width(10),
              marginLeft: 15,
            }}
            resizeMode="contain"
          />
          <Image
            source={images.notification}
            style={{
              width: width(10),
              height: width(10),
              marginRight: 15,
            }}
            resizeMode="contain"
          />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[{icon: images.card3}, {icon: images.card2}]}
          renderItem={({item, index}) => {
            return (
              <>
                {index === 0 && (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 15,
                    }}>
                    <Image
                      source={images.add}
                      style={{
                        width: width(10),
                        height: width(10),
                        marginRight: 15,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                )}
                <TouchableOpacity
                  onPress={() => navigation.navigate(ScreenNames.BALANCE)}>
                  <Image
                    source={item?.icon}
                    style={{
                      width: width(90),
                      height: width(60),
                      marginRight: 15,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </>
            );
          }}
        />

        <Text style={styles.charitiesTitle}>Expenses </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{
            paddingHorizontal: 10,
          }}
          horizontal
          data={[
            {
              icon: images.sync,
              name: 'Remittance Companies',
            },
            {
              icon: images.global,
              name: 'Shipping Companies',
            },
            {
              icon: images.icons,
              name: 'Shopping Sites',
            },
            {
              icon: images.icons2,
              name: 'Flights Companies',
            },
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.charityCard}>
                <View style={styles.charityIcon}>
                  <Image source={item?.icon} style={styles.iconImage} />
                </View>
                <Text style={styles.charityName}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.charitiesTitle}>Expenses </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{
            paddingHorizontal: 10,
          }}
          horizontal
          data={[
            {
              icon: images.sync,
              name: 'Food & Drinks',
            },
            {
              icon: images.global,
              name: 'Services',
            },
            {
              icon: images.icons,
              name: 'Share or rent',
            },
            {
              icon: images.icons2,
              name: 'Jobs',
            },
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.charityCard}>
                <View style={styles.charityIcon}>
                  <Image source={item?.icon} style={styles.iconImage} />
                </View>
                <Text style={styles.charityName}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.charitiesTitle}>Your recent visit partners </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[1, 2, 3, 4]}
          renderItem={({item, index}) => {
            return (
              <>
                {index === 0 && (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 15,
                    }}>
                    <Image
                      source={images.iconPerson}
                      style={{
                        width: width(20),
                        height: width(20),
                        marginRight: 15,
                      }}
                      resizeMode="contain"
                    />
                    <Text style={styles.charityName1}>+Add</Text>
                  </View>
                )}
                <TouchableOpacity
                  onPress={() => navigation.navigate(ScreenNames.HOME)}>
                  <Image
                    source={images.profile2}
                    style={{
                      width: width(20),
                      height: width(20),
                      marginRight: 15,
                    }}
                    resizeMode="contain"
                  />
                  <Text style={styles.charityName1}>Chris</Text>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingBottom: 80,
    backgroundColor: '#D3D2D2',
  },
  header: {
    alignItems: 'center',
    padding: 16,
    marginTop: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 27,
    color: '#333',
    fontFamily: FontFamily.appFontBold,
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
    fontWeight: '500',
    color: '#8A8A8E',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  charitiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  charityCard: {
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
    width: 35,
    height: 35,
  },
  charityName: {
    fontSize: 12,
    color: '#333',
    width: width(23),
    textAlign: 'center',
    fontFamily: FontFamily.appFontMedium,
    marginBottom: 4,
  },
  charityName1: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    marginLeft: -10,
    fontFamily: FontFamily.appFontMedium,
    marginTop: 4,
  },
  charityDetailContainer: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  charityDetailCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
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
  charityDetailIconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  charityDetailName: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  charityDetailAccount: {
    fontSize: 14,
    color: '#666',
  },
});

export default Balance;
