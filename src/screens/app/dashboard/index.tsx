import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {images} from '~assets/images';
import {CustomText} from '~components';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';

const Dashboard = ({navigation}: any) => {
  return (
    <ScreenWrapper barStyle="light-content" translucent scrollType="scroll">
      <View style={styles.container}>
        <View
          style={{
            zIndex: 100,
            alignItems: 'center',
            justifyContent: 'center',
            height: width(23),
            backgroundColor: '#01BD82',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', left: 10, top: 40}}
            onPress={() => {
              navigation.navigate(ScreenNames.HOME);
            }}>
            <Image
              source={images.group2}
              style={{
                width: width(10),
                height: width(10),
              }}
            />
          </TouchableOpacity>
          <CustomText
            color="#fff"
            size={4}
            lineHeight={120}
            font={FontFamily.appFontMedium}>
            Anglistics dashboard
          </CustomText>
          <TouchableOpacity
            style={{position: 'absolute', right: 10, top: 40}}
            onPress={() => {
              navigation.navigate(ScreenNames.HOME);
            }}>
            <Image
              source={images.scanner}
              style={{
                width: width(10),
                height: width(10),
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
          <CustomText color="#878787" size={3.5} font={FontFamily.appFontBold}>
            Current Balance
          </CustomText>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomText
              color="#5163BF"
              size={7}
              lineHeight={50}
              font={FontFamily.appFontSemiBold}>
              $2,85,856.20
            </CustomText>
            <Image
              source={images.transfer}
              style={{
                width: width(10),
                height: width(10),
              }}
            />
          </View>
          <FlatList
            horizontal
            data={[1, 2]}
            renderItem={() => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate(ScreenNames.BALANCE)}>
                  <Image
                    source={images.card2}
                    style={{
                      width: width(90),
                      height: width(60),
                      marginRight: 5,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomText
              color="#878787"
              size={3.5}
              font={FontFamily.appFontBold}>
              Incoming Transaction
            </CustomText>
            <CustomText
              color="#5163BF"
              size={3.5}
              font={FontFamily.appFontSemiBold}>
              See all{'>'}
            </CustomText>
          </View>
          <FlatList
            horizontal
            data={[1, 2]}
            renderItem={() => {
              return (
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    margin: 10,
                    marginBottom: 30,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 3,
                  }}>
                  <TouchableOpacity
                    style={{
                      padding: 15,
                    }}>
                    <View
                      style={{
                        width: width(35),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        source={images.profile2}
                        style={{
                          width: width(11),
                          height: width(11),
                        }}
                      />
                      <View
                        style={{
                          alignItems: 'flex-end',
                        }}>
                        <Image
                          source={images.icon1}
                          style={{
                            width: width(8),
                            height: width(8),
                            marginBottom: 5,
                          }}
                          resizeMode="contain"
                        />
                        <CustomText
                          color="#8EDFEB"
                          size={4}
                          textStyles={{marginTop: -4}}
                          font={FontFamily.appFontSemiBold}>
                          + $62.54
                        </CustomText>
                      </View>
                    </View>
                    <CustomText
                      color="#878787"
                      size={3}
                      font={FontFamily.appFontSemiBold}>
                      From
                    </CustomText>
                    <CustomText
                      color="#1E1E1E"
                      size={3.2}
                      left
                      textStyles={{marginTop: 1, width: width(20)}}
                      font={FontFamily.appFontBold}>
                      Johnson Charles
                    </CustomText>
                  </TouchableOpacity>
                  <ImageBackground
                    style={{
                      width: '100%',
                      marginTop: -28,
                      height: width(25),
                    }}
                    source={images.graph}>
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 5,
                      }}>
                      <CustomText
                        color="#878787"
                        size={3}
                        font={FontFamily.appFontSemiBold}>
                        23 December 2020
                      </CustomText>
                    </View>
                  </ImageBackground>
                </View>
              );
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomText
              color="#878787"
              size={3.5}
              font={FontFamily.appFontBold}>
              Outgoing Transactions
            </CustomText>
            <CustomText
              color="#5163BF"
              size={3.5}
              font={FontFamily.appFontSemiBold}>
              See all{'>'}
            </CustomText>
          </View>
          <FlatList
            horizontal
            data={[1, 2]}
            renderItem={() => {
              return (
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    margin: 10,
                    marginBottom: 30,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 3,
                  }}>
                  <TouchableOpacity
                    style={{
                      padding: 15,
                    }}>
                    <View
                      style={{
                        width: width(35),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        source={images.profile2}
                        style={{
                          width: width(11),
                          height: width(11),
                        }}
                      />
                      <View
                        style={{
                          alignItems: 'flex-end',
                        }}>
                        <Image
                          source={images.arrowTop}
                          style={{
                            width: width(8),
                            height: width(8),
                            marginBottom: 5,
                          }}
                          resizeMode="contain"
                        />
                        <CustomText
                          color="#5164BF"
                          size={4}
                          textStyles={{marginTop: -4}}
                          font={FontFamily.appFontSemiBold}>
                          + $62.54
                        </CustomText>
                      </View>
                    </View>
                    <CustomText
                      color="#878787"
                      size={3}
                      font={FontFamily.appFontSemiBold}>
                      From
                    </CustomText>
                    <CustomText
                      color="#1E1E1E"
                      size={3.2}
                      left
                      textStyles={{marginTop: 1, width: width(20)}}
                      font={FontFamily.appFontBold}>
                      Johnson Charles
                    </CustomText>
                  </TouchableOpacity>
                  <ImageBackground
                    style={{
                      width: '100%',
                      marginTop: -28,
                      height: width(25),
                    }}
                    source={images.graph2}>
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 5,
                      }}>
                      <CustomText
                        color="#878787"
                        size={3}
                        font={FontFamily.appFontSemiBold}>
                        12 December 2021
                      </CustomText>
                    </View>
                  </ImageBackground>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Dashboard;
