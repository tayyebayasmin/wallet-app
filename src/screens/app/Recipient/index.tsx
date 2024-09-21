import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {images} from '~assets/images';
import {Button} from '~components';
import DropdownComponent from '~components/drop-down-modal';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';

const Recipient = ({navigation}: any) => {
  const [transactionType, settransactionType] = useState('1');
  const [Country, setCountry] = useState('1');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [city, setCity] = useState('Sukutaa');
  const [postCode, setPostCode] = useState('w2 345 SU');
  const [address, setaddress] = useState(`23 A SALING , KUN, 
SUKTAAA THE GAMBI`);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View
        style={{marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.Remittance)}>
          <Image
            source={images.backArrow}
            resizeMode="contain"
            style={{width: width(6), height: width(6), marginRight: 5}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Add Recipient</Text>
      </View>
      {/* Sending Country */}
      <Text style={styles.label}>Transaction Type:</Text>
      <View>
        <DropdownComponent
          value={transactionType}
          setValue={settransactionType}
          data={[
            {label: 'Bank Transfer', value: '1'},
            {label: 'Item 2', value: '2'},
            {label: 'Item 3', value: '3'},
            {label: 'Item 4', value: '4'},
            {label: 'Item 5', value: '5'},
            {label: 'Item 6', value: '6'},
            {label: 'Item 7', value: '7'},
            {label: 'Item 8', value: '8'},
          ]}
        />
      </View>
      {/* Receiving Country */}
      <Text style={styles.label}>Select Country:</Text>
      <DropdownComponent
        value={Country}
        setValue={setCountry}
        data={[
          {label: 'United States Dollar', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'},
          {label: 'Item 4', value: '4'},
          {label: 'Item 5', value: '5'},
          {label: 'Item 6', value: '6'},
          {label: 'Item 7', value: '7'},
          {label: 'Item 8', value: '8'},
        ]}
      />

      {/* Amount */}

      <Text style={styles.label}>Email Address (Optional)</Text>
      <View style={styles.recipientAmountContainer}>
        <TextInput
          style={[styles.input, styles.recipientAmountInput]}
          value={email}
          placeholderTextColor={'#7C7F84'}
          placeholder={'Enter Email Address'}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Text style={[styles.label, {marginTop: width(4), marginBottom: 0}]}>
        Phone number
      </Text>

      <PhoneInput
        // ref={phoneInput}
        defaultValue={value}
        defaultCode="DM"
        layout="first"
        onChangeText={text => {
          setValue(text);
        }}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        placeholder="Enter phone number"
        withDarkTheme={false}
        countryPickerButtonStyle={{
          position: 'absolute',
          right: -100,
          borderColor: '#346ACB',
          height: 55,
          borderRadius: 7,
          borderWidth: 1.5,
        }}
        textContainerStyle={{
          height: 55,
          width: 55,
          borderRadius: 7,
        }}
        containerStyle={{
          borderColor: '#346ACB',
          borderWidth: 1.5,
          marginVertical: 5,
          width: width(60),
          borderRadius: 7,
        }}
        textInputStyle={{
          height: 55,
          width: 55,
          color: '#000',
        }}
        withShadow
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.label2}>First Name</Text>
          <TextInput
            style={styles.input2}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View>
          <Text style={styles.label2}>Last Name</Text>
          <TextInput
            style={styles.input2}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.label2}>City</Text>
          <TextInput
            style={styles.input2}
            value={city}
            onChangeText={setCity}
          />
        </View>
        <View>
          <Text style={styles.label2}>Post Code</Text>
          <TextInput
            style={styles.input2}
            value={postCode}
            onChangeText={setPostCode}
          />
        </View>
      </View>
      <Text style={styles.addressLabel}>Full Address Of the Receipent</Text>
      <TextInput
        style={styles.addressContainer}
        value={address}
        multiline
        onChangeText={setaddress}
      />
      <Button
        size={3.5}
        onPress={() => navigation.navigate(ScreenNames.Preview)}
        containerStyle={styles.confirmButton}
        title="SAVE & CONTINUE"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    color: '#0C55DD',
    fontSize: 24,
    width: width(70),
    textAlign: 'center',
    fontFamily: FontFamily.appFontSemiBold,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    fontFamily: FontFamily.appFontMedium,
    color: '#3A3A3A',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 7,
    borderColor: '#346ACB',
    padding: 10,
    color: '#346ACB',
    fontSize: 16,
  },
  recipientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recipientInput: {
    flex: 1,
    marginRight: 10,
  },
  confirmButton: {
    marginBottom: 100,
    backgroundColor: '#0C56DB',
    padding: width(4),
    borderRadius: width(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    width: width(90),
  },
  reasonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reasonInput: {
    flex: 1,
    marginRight: 10,
  },
  fundingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fundingInput: {
    flex: 1,
    marginRight: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountInput: {
    flex: 1,
    marginRight: 10,
  },
  recipientAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recipientAmountInput: {
    flex: 1,
    marginRight: 10,
  },
  info: {
    fontSize: 14,
    color: '#7F95BC',
    marginVertical: 2,
  },
  label2: {
    fontSize: 16,
    marginVertical: 5,
    color: '#000',
  },
  input2: {
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#7C7F84',
    padding: 10,
    width: width(40),
    borderRadius: 5,
    marginBottom: 15,
  },
  addressLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  addressContainer: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    color: '#7C7F84',
    borderColor: '#ccc',
    padding: 10,
    height: 100,
  },
});

export default Recipient;
