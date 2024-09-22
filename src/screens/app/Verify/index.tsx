import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Image, View, TextInput, TouchableOpacity, Text} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import {images} from '~assets/images';
import {width} from '~utils';
import {CustomText, Button} from '~components'; // Assuming Button and CustomText components exist
import {FontFamily} from '~utils/Fontfamily';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenNames} from '~routes';

const Verify = ({navigation}: NativeStackScreenProps<any>) => {
  const [amount, setAmount] = useState('');
  const [recieveamount, setRecieveAmount] = useState('200');

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
            <Image
              source={images.more}
              style={{
                width: width(5),
                height: width(5),
                tintColor: '#D9D9D9',
                position: 'absolute',
                right: width(30),
              }}
              resizeMode="contain"
            />
            <CustomText
              font={FontFamily.appFontMedium}
              size={width(0.7)}
              color="#fff">
              Check number
            </CustomText>
          </TouchableOpacity>
        </View>
        {/* PayG Verify Charity Details Section */}
        <View style={{flexDirection: 'row'}}>
          <Button
            size={3.5}
            onPress={() => navigation.navigate(ScreenNames.REGISTER)}
            containerStyle={{
              width: width(50),
              height: width(12),
              backgroundColor: '#10E54C',
              alignSelf: 'flex-start',
            }}
            title="USER FOUND AND VERIFY"
          />
          <Image
            source={images.correct}
            style={{width: width(8), height: width(8)}}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            backgroundColor: '#EAF2FF',
            marginVertical: 20,
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 8,
          }}>
          <CustomText>Select Purpose </CustomText>
          <Image
            source={images.tick}
            style={{width: width(5), height: width(5)}}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            backgroundColor: '#EAF2FF',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 8,
          }}>
          <CustomText>Select Source Of Fund </CustomText>
          <Image
            source={images.tick}
            style={{width: width(5), height: width(5)}}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.label, {marginTop: 15}]}>Amount:</Text>
        <TextInput
          style={[styles.amountInput]}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Recieve Amount:</Text>
        <TextInput
          style={[styles.amountInput]}
          value={recieveamount}
          onChangeText={setRecieveAmount}
          keyboardType="numeric"
        />
        {/* Confirm Button */}
        <Button
          size={3.5}
          onPress={() => navigation.navigate(ScreenNames.Remittance)}
          containerStyle={styles.confirmButton}
          title="Next"
        />
      </View>
    </ScreenWrapper>
  );
};

export default Verify;
