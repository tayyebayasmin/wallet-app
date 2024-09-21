import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, View, TextInput, TouchableOpacity, Text} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import {images} from '~assets/images';
import {width} from '~utils';
import {CustomText, Button} from '~components'; // Assuming Button and CustomText components exist
import {FontFamily} from '~utils/Fontfamily';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenNames} from '~routes';

const Charity = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper statusBarColor={'white'} barStyle="dark-content">
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={images.back}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <CustomText
            textStyles={styles.title}
            textAlign="center"
            font={FontFamily.appFontMedium}
            size={width(1.1)}>
            Create New Remittance
          </CustomText>
        </View>
        {/* Partner Sender Details Section */}
        <LinearGradient
          start={{x: 0, y: 0}} // Top-left corner
          end={{x: 1, y: 1}}
          locations={[0, 1, 0.2, 0.2]}
          colors={['#0C378C', '#7493D0', '#7D9CDA', '#3D6DCB']}
          style={{borderRadius: 12, marginTop: 12}}>
          <View style={styles.senderDetails}>
            <CustomText
              font={FontFamily.appFontRegular}
              size={width(1.1)}
              textStyles={{alignSelf: 'center', marginBottom: width(3)}}
              color="#FFFFFF">
              Partner Sender Details
            </CustomText>

            <View
              style={{
                position: 'absolute',
                top: width(12),
                bottom: 0,
                left: width(45),
                right: 0,
                height: width(20),
                borderColor: '#FFFFFF',
                borderLeftWidth: 1,
              }}
            />
            <View style={styles.detailBox}>
              <CustomText
                font={FontFamily.appFontRegular}
                size={width(0.8)}
                color="#FFFFFF">
                Your Number
              </CustomText>
              <CustomText
                font={FontFamily.appFontRegular}
                size={width(0.8)}
                color="#FFFFFF">
                +446654333
              </CustomText>
            </View>
            <View style={styles.detailBox}>
              <CustomText
                font={FontFamily.appFontRegular}
                size={width(0.8)}
                color="#FFFFFF">
                First Name
              </CustomText>
              <CustomText
                font={FontFamily.appFontRegular}
                size={width(0.8)}
                color="#FFFFFF">
                ssaae chh
              </CustomText>
            </View>
            <View style={styles.detailBox}>
              <CustomText
                font={FontFamily.appFontRegular}
                size={width(0.8)}
                color="#FFFFFF">
                Address
              </CustomText>
              <CustomText
                font={FontFamily.appFontRegular}
                size={width(0.8)}
                color="#FFFFFF">
                London bn2 5ed
              </CustomText>
            </View>
          </View>
        </LinearGradient>
        <CustomText
          font={FontFamily.appFontRegular}
          size={width(1)}
          textStyles={{marginVertical: width(2)}}
          color="#000">
          PayG receiver Number
        </CustomText>
        {/* PayG Receiver Number Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="+2206654333"
            keyboardType="phone-pad"
            placeholderTextColor={'#91969E'}
            editable={false}
          />
          <TouchableOpacity style={styles.searchButton}>
            <CustomText
              font={FontFamily.appFontMedium}
              size={width(0.7)}
              color="#fff">
              Search user
            </CustomText>
          </TouchableOpacity>
        </View>
        <CustomText
          font={FontFamily.appFontSemiBold}
          size={width(1)}
          center
          textStyles={{marginVertical: width(2)}}
          color="#582020">
          PayG Verify Charity details
        </CustomText>
        {/* PayG Verify Charity Details Section */}
        <View style={styles.card}>
          <Image source={images.verify} style={styles.icon} />
          <View style={styles.topRow}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={images.logo} // Replace with actual image URI
                style={styles.icon}
              />
              <CustomText
                color="black"
                size={width(0.9)}
                textStyles={{marginLeft: 5}}>
                PayG
              </CustomText>
            </View>
            <Text style={styles.tag}>Wallet Transfer</Text>
          </View>

          {/* Receiver Details */}
          <View style={styles.details}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>Receiver Number</Text>
              <Text style={styles.value}>+2206654333</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>First Name</Text>
              <Text style={styles.value}>Charity Emilley</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>Address</Text>
              <Text style={styles.value}>Sukutabn2</Text>
            </View>
            <View
              style={{
                width: width(85),
                marginVertical: 8,
                borderColor: '#8D6868',
                borderBottomWidth: 1,
              }}
            />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>User type</Text>
              <Text style={styles.value}>Merchant/Charity</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>Receive Amount</Text>
              <Text style={styles.value}>
                <Text style={styles.currency}>GMD 20000</Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>Receiver Country</Text>
              <Text style={styles.value}>The Gambia</Text>
            </View>
            {/* Progress Bar Placeholder */}
            <View style={styles.progressBar}>
              <View style={styles.progress}></View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>Partner Agent</Text>
              <Text style={styles.value}>Jula Financial</Text>
            </View>
          </View>
        </View>
        {/* Confirm Button */}
        <Button
          size={3.5}
          onPress={() => navigation.navigate(ScreenNames.REGISTER)}
          containerStyle={styles.confirmButton}
          title="Confirm and Continue To Payment Screen"
        />
      </View>
    </ScreenWrapper>
  );
};

export default Charity;
