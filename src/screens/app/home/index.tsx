import React, {useState} from 'react';
import {FlatList, ScrollView, TextInput} from 'react-native';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {images} from '~assets/images';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';

const Home = ({navigation}: any) => {
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.searchTitle}>Search By Categories</Text>
          <View>
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: width(50),
                borderRadius: 100,
                height: width(10),
                color: '#000',
                fontSize: 12,
                paddingHorizontal: 15,
              }}
              placeholderTextColor="#000"
              value={search}
              placeholder="Search Charities"
              multiline
              onChangeText={setSearch}
            />
            <Image
              source={images.search}
              style={{
                width: 20,
                height: 20,
                right: 10,
                top: 10,
                position: 'absolute',
                alignSelf: 'flex-end',
              }}
            />
          </View>
        </View>
        <FlatList
          horizontal
          data={[
            'Religion done',
            'Political parties',
            'Sick People',
            'Medical Help',
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  {backgroundColor: categories === item ? '#B6EF11' : '#000'},
                ]}
                onPress={() => setCategories(item)}>
                <Text
                  style={[
                    styles.categoryButtonText,
                    {color: categories === item ? '#000' : '#fff'},
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.charitiesTitle}>POPULAR CHARITIES</Text>
        <FlatList
          style={{
            paddingHorizontal: 10,
          }}
          horizontal
          data={[
            'Religion done',
            'Political parties',
            'Sick People',
            'Medical Help',
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.charityCard}>
                <View style={styles.charityIcon}>
                  <Image source={images.chemical} style={styles.iconImage} />
                </View>
                <Text style={styles.charityName}>Emily Charity</Text>
              </TouchableOpacity>
            );
          }}
        />

        <FlatList
          data={[
            {
              short: 'EA',
              name: 'Emily Charity',
              colors: ['#F4C96D', '#9AD6E9'],
              detail: ' AW BANK UNI 234-46589-000',
            },
            {
              short: 'OW',
              name: 'Oliver Charity for kid',
              colors: ['#E0C3FC', '#8EC5FC'],
              detail: ' AW BANK UNI 234-46589-000',
            },
            {
              short: 'SB',
              name: 'Charity 100',
              colors: ['#EBBBA7', '#CFC7F8'],
              detail: ' AW BANK UNI 234-46589-000',
            },
            {
              short: 'CW',
              name: 'Red Cross',
              colors: ['#8FEFE9', '#DBBAEF'],
              detail: ' AW BANK UNI 234-46589-000',
            },
          ]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.charityDetailContainer} key={index}>
                <TouchableOpacity
                  style={styles.charityDetailCard}
                  onPress={() => navigation.navigate(ScreenNames.WALLET)}>
                  <LinearGradient
                    style={styles.charityDetailIcon}
                    start={{x: 0, y: 0}} // Top-left corner
                    end={{x: 1, y: 1}}
                    locations={[0, 1, 0.2, 0.2]}
                    colors={item?.colors}>
                    <Text style={styles.charityDetailIconText}>
                      {item?.short}
                    </Text>
                  </LinearGradient>
                  <View>
                    <Text style={styles.charityDetailName}>{item?.name}</Text>
                    <Text style={styles.charityDetailAccount}>
                      {item?.detail}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
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
    paddingTop: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
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
    fontWeight: 'bold',
    color: '#333',
    padding: 16,
    marginTop: 16,
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
    width: 55,
    height: 55,
    tintColor: 'blue',
  },
  charityName: {
    fontSize: 12,
    color: '#333',
    fontFamily: FontFamily.appFontMedium,
    marginBottom: 4,
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

export default Home;
