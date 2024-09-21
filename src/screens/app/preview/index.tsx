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

const Preview = ({navigation}: any) => {
  const [amount, setAmount] = useState(7766);
  const [recipientInfo, setRecipientInfo] = useState('Cham dem');
  const [amountInfo, setAmountInfo] = useState({
    enterAmount: 2333.0,
    transferFee: 3.4445,
    recipientReceived: 345.56,
    wages: 0,
    schoolFees: 0,
    totalPayable: 20000,
  });

  return (
    <ScrollView style={styles.container}>
      <View
        style={{marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.Recipient)}>
          <Image
            source={images.backArrow}
            resizeMode="contain"
            style={{width: width(6), height: width(6), marginRight: 5}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Preview</Text>
      </View>
      <Text style={styles.amountText}>{amount} USD</Text>
      <Text style={styles.amountText1}>Entered Amount</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Recipient Information</Text>
        <View
          style={{
            width: width(85),
            marginVertical: 10,
            borderColor: '#D3DAE4',
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>{recipientInfo}</Text>
          <Text style={styles.infoText}>Cash-Pick Up</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.infoTitle, {marginVertical: width(8)}]}>
          Amount Information
        </Text>
        <View
          style={{
            width: width(85),
            marginVertical: 10,
            borderColor: '#D3DAE4',
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.infoRow}>
          <Text style={styles.infoText1}>Enter Amount</Text>
          <Text style={styles.infoText}>{amountInfo.enterAmount} USD</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText1}>Transfer fee</Text>
          <Text style={styles.infoText}>{amountInfo.transferFee} USD</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText1}>Recipient Received</Text>
          <Text style={styles.infoText}>
            {amountInfo.recipientReceived}.GMD
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText1}>Enter Amount</Text>
          <Text style={styles.infoText}>Wages</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText1}>Enter Amount</Text>
          <Text style={styles.infoText}>School fees</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText1}>Total Payable</Text>
          <Text
            style={[
              styles.infoText,
              {backgroundColor: 'white', padding: 2, borderRadius: 5},
            ]}>
            {amountInfo.totalPayable} GMD
          </Text>
        </View>
      </View>

      <Button
        size={3.5}
        onPress={() => navigation.navigate(ScreenNames.PREVIEW2)}
        containerStyle={styles.confirmButton}
        title="Confirm & Go to Payment"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F3F3',
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
  amountText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#0C56DB',
  },
  amountText1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#3A3A3A',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3A3A3A',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  infoText: {
    color: '#1E58BE',
    fontSize: 16,
  },
  infoText1: {
    marginTop: 5,
    color: '#7F95BC',
    fontSize: 16,
  },
});

export default Preview;
