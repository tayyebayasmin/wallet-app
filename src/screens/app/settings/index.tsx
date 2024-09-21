import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {images} from '~assets/images';
import {CustomText} from '~components';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';

const Home = ({navigation}: any) => {
  return (
    <ScreenWrapper barStyle="light-content" translucent>
      <View style={styles.container}>
        <View
          style={{
            zIndex: 100,
            alignItems: 'center',
            justifyContent: 'center',
            height: width(30),
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: '#3A66BD',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', left: 10}}
            onPress={() => {
              navigation.navigate(ScreenNames.HOME);
            }}>
            <Image
              source={images.back2}
              style={{
                width: width(10),
                height: width(10),
              }}
            />
          </TouchableOpacity>
          <CustomText
            color="#fff"
            size={10}
            lineHeight={120}
            font={FontFamily.appFontMedium}>
            Home
          </CustomText>
        </View>
        <ImageBackground
          source={images.bg1}
          resizeMode="contain"
          style={{
            marginTop: -15,
            width: width(150),
            height: width(60),
          }}>
          <Image
            source={images.companyinfo}
            style={{
              alignSelf: 'center',
              width: width(70),
              height: width(35),
            }}
            resizeMode="contain"
          />
          <Image
            source={images.profile}
            style={{
              alignSelf: 'center',
              width: width(60),
              height: width(50),
            }}
            resizeMode="contain"
          />
        </ImageBackground>
        <View style={{alignItems: 'center'}}>
          <CustomText
            font={FontFamily.appFontSemiBold}
            color="#000F30"
            size={width(1.5)}
            lineHeight={width(7)}
            textStyles={{
              marginTop: width(30),
            }}>
            JOHN DOE
          </CustomText>
          <CustomText
            font={FontFamily.appFontSemiBold}
            color="#2E9DA6"
            size={width(1)}
            lineHeight={width(7)}>
            GAMBIA D.I.C
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width(60),
            }}>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#2E9DA6"
              size={width(0.8)}>
              ID NO
            </CustomText>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#000F30"
              size={width(0.8)}>
              : 905750250
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width(60),
            }}>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#2E9DA6"
              size={width(0.8)}>
              DOB
            </CustomText>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#000F30"
              size={width(0.8)}>
              DD/MM/YEAR
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width(60),
            }}>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#2E9DA6"
              size={width(0.8)}>
              NATIONALITY
            </CustomText>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#000F30"
              size={width(0.8)}>
              : GAMBIA
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width(60),
            }}>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#2E9DA6"
              size={width(0.8)}>
              SEX
            </CustomText>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#000F30"
              size={width(0.8)}>
              : MALE
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width(60),
            }}>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#2E9DA6"
              size={width(0.8)}>
              ISSUE DATE
            </CustomText>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color="#000F30"
              size={width(0.8)}>
              DD/MM/YEAR
            </CustomText>
          </View>
          <CustomText
            textAlign="center"
            font={FontFamily.appFontSemiBold}
            color="#000F30"
            center
            textStyles={{width: width(50), marginVertical: 5}}
            size={width(0.8)}>
            Your address goes here 125 Street, USA
          </CustomText>
        </View>
        <Image
          source={images.qr1}
          style={{
            alignSelf: 'center',
            width: width(30),
            height: width(22),
          }}
          resizeMode="contain"
        />
        <Image
          source={images.bg2}
          style={{
            alignSelf: 'center',
            width: width(100),
            marginTop: -15,
            height: width(30),
          }}
        />
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

export default Home;
