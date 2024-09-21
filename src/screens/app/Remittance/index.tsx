import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {images} from '~assets/images';
import {Button} from '~components';
import DropdownComponent from '~components/drop-down-modal';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';

const Remittance = ({navigation}: any) => {
  const [sendingCountry, setSendingCountry] = useState('1');
  const [receivingCountry, setReceivingCountry] = useState('1');
  const [receivingMethod, setReceivingMethod] = useState('1');
  const [recipient, setRecipient] = useState('1');
  const [reasonForSending, setReasonForSending] = useState('1');
  const [sourceOfFunding, setSourceOfFunding] = useState('1');
  const [amount, setAmount] = useState('200');
  const [recipientAmount, setRecipientAmount] = useState('300.50');

  return (
    <ScrollView style={styles.container}>
      <View
        style={{marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.VERIFY)}>
          <Image
            source={images.backArrow}
            resizeMode="contain"
            style={{width: width(6), height: width(6), marginRight: 5}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Remittance</Text>
      </View>
      {/* Sending Country */}
      <Text style={styles.label}>Sending Country:</Text>
      <View>
        <DropdownComponent
          value={sendingCountry}
          setValue={setSendingCountry}
          data={[
            {label: 'United States', value: '1'},
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
      <Text style={styles.label}>Receiving Country:</Text>
      <DropdownComponent
        value={receivingCountry}
        setValue={setReceivingCountry}
        data={[
          {label: 'United States', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'},
          {label: 'Item 4', value: '4'},
          {label: 'Item 5', value: '5'},
          {label: 'Item 6', value: '6'},
          {label: 'Item 7', value: '7'},
          {label: 'Item 8', value: '8'},
        ]}
      />

      {/* Receiving Method */}
      <Text style={styles.label}>Receiving Method:</Text>
      <DropdownComponent
        value={receivingMethod}
        setValue={setReceivingMethod}
        data={[
          {label: ' Cash-Pick Up', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'},
          {label: 'Item 4', value: '4'},
          {label: 'Item 5', value: '5'},
          {label: 'Item 6', value: '6'},
          {label: 'Item 7', value: '7'},
          {label: 'Item 8', value: '8'},
        ]}
      />
      {/* Recipient */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.label}>Recipient:</Text>
        <Text style={styles.label}>or Add New</Text>
      </View>
      <View style={styles.recipientContainer}>
        <DropdownComponent
          w={width(72)}
          value={recipient}
          setValue={setRecipient}
          data={[
            {label: 'School fees', value: '1'},
            {label: 'Item 2', value: '2'},
            {label: 'Item 3', value: '3'},
            {label: 'Item 4', value: '4'},
            {label: 'Item 5', value: '5'},
            {label: 'Item 6', value: '6'},
            {label: 'Item 7', value: '7'},
            {label: 'Item 8', value: '8'},
          ]}
        />
        <Button
          title="ADD +"
          onPress={() => console.log('Add Reason')}
          size={3}
          containerStyle={{width: width(15)}}
        />
      </View>
      {/* Reason for Sending */}
      <Text style={styles.label}>Reason for sending:</Text>
      <View style={styles.reasonContainer}>
        <DropdownComponent
          w={width(72)}
          value={reasonForSending}
          setValue={setReasonForSending}
          data={[
            {label: 'Cham Dema', value: '1'},
            {label: 'Item 2', value: '2'},
            {label: 'Item 3', value: '3'},
            {label: 'Item 4', value: '4'},
            {label: 'Item 5', value: '5'},
            {label: 'Item 6', value: '6'},
            {label: 'Item 7', value: '7'},
            {label: 'Item 8', value: '8'},
          ]}
        />
        <Button
          title="ADD +"
          onPress={() => console.log('Add Reason')}
          size={3}
          containerStyle={{width: width(15)}}
        />
      </View>
      {/* Source of Funding */}
      <Text style={styles.label}>Source of Funding:</Text>
      <View style={styles.fundingContainer}>
        <DropdownComponent
          w={width(72)}
          value={sourceOfFunding}
          setValue={setSourceOfFunding}
          data={[
            {label: 'Wages', value: '1'},
            {label: 'Item 2', value: '2'},
            {label: 'Item 3', value: '3'},
            {label: 'Item 4', value: '4'},
            {label: 'Item 5', value: '5'},
            {label: 'Item 6', value: '6'},
            {label: 'Item 7', value: '7'},
            {label: 'Item 8', value: '8'},
          ]}
        />
        <Button
          title="ADD +"
          onPress={() => console.log('Add Reason')}
          size={3}
          containerStyle={{width: width(15)}}
        />
      </View>
      {/* Amount */}
      <Text style={styles.label}>Amount:</Text>
      <View style={styles.amountContainer}>
        <TextInput
          style={[styles.input, styles.amountInput]}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <Button
          title="USD"
          onPress={() => console.log('USD')}
          size={3}
          containerStyle={{
            width: width(20),
            position: 'absolute',
            right: 0,
          }}
        />
      </View>
      {/* Fees & Charges, Limit */}
      <Text style={styles.info}>Fees & Charges: 3, 55555 USD</Text>
      <Text style={styles.info}>Limit: 3, 20.0 USD - 15000 USD</Text>
      {/* Recipient Amount */}
      <Text style={styles.label}>Recipient:</Text>
      <View style={styles.recipientAmountContainer}>
        <TextInput
          style={[styles.input, styles.recipientAmountInput]}
          value={recipientAmount}
          onChangeText={setRecipientAmount}
          keyboardType="numeric"
        />
        <Button
          title="GMD"
          onPress={() => console.log('USD')}
          size={3}
          containerStyle={{
            width: width(20),
            position: 'absolute',
            right: 0,
          }}
        />
      </View>
      <Button
        size={3.5}
        onPress={() => navigation.navigate(ScreenNames.Recipient)}
        containerStyle={styles.confirmButton}
        title="Next"
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
});

export default Remittance;
