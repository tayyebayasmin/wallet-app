import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {images} from '~assets/images';
import {Button} from '~components';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';

const Preview2 = ({navigation}: any) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.Preview)}>
          <Image
            source={images.backArrow}
            resizeMode="contain"
            style={{width: width(6), height: width(6), marginRight: 6}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Preview</Text>
      </View>
      <Image
        source={images.logo1}
        resizeMode="contain"
        style={{width: width(30), alignSelf: 'center'}}
      />
      <Text style={styles.dateTime}>Wed, May 27, 2020 9:27:53 AM</Text>
      <View style={styles.reference}>
        <Text style={styles.referenceTitle}>Reference</Text>
        <Text style={styles.referenceNumber}>0237-7746FG</Text>
      </View>

      {showDetails && (
        <ScrollView style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Receiving method</Text>
            <Text style={styles.detailValue}>Cash Pick-Up</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Recipient Name</Text>
            <Text style={styles.detailValue}>Victor Shoaga</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Customer Type</Text>
            <Text style={styles.detailValue}>Customer</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>
              7953 Oakland St. Honolulu, HI 96815
            </Text>
          </View>
          <View style={styles.line} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>User Number</Text>
            <Text style={styles.detailValue}>+2272997324</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount Before Fee</Text>
            <Text style={styles.detailValue}>950 USD</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Charge Fee</Text>
            <Text style={styles.detailValue}>2,00 GMD</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Total To Be Paid</Text>
            <Text style={styles.detailValue}>1000 GMD</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Total Sent In USD</Text>
            <Text style={styles.detailValue}>200 USD</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Operator</Text>
            <Text style={styles.detailValue}>Ade</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Thanks for sending and once we received the fund your recipient
              will be able to collect it from our branch or any of our partners:
              western union: Baybar:
            </Text>
            <Image
              source={images.acme}
              resizeMode="contain"
              style={{width: width(40), height: width(30), marginRight: 6}}
            />
          </View>
        </ScrollView>
      )}

      <Button
        title="Share Receipt"
        onPress={() => {
          navigation.navigate(ScreenNames.Settings);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#0C55DD',
    fontSize: 24,
    width: width(75),
    textAlign: 'center',
    fontFamily: FontFamily.appFontSemiBold,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#007bff',
  },
  dateTime: {
    color: '#000',
    textAlign: 'center',
    letterSpacing: 1,
    fontWeight: '800',
    marginTop: -6,
    fontFamily: FontFamily.appFontMedium,
    fontSize: 12,
  },
  reference: {
    alignItems: 'center',
    marginTop: 20,
    height: width(18),
    borderWidth: 1.5,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderStyle: 'dashed',
  },
  referenceTitle: {
    position: 'absolute',
    top: -12,
    fontSize: 16,
    color: '#000',
    letterSpacing: 1,
    width: width(28),
    textAlign: 'center',
    backgroundColor: '#fff',
    fontWeight: '500',
  },
  referenceNumber: {
    color: '#000',
    fontSize: 20,
  },
  details: {
    padding: 20,
    marginTop: 20,
  },
  detailRow: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    width: width(40),
    color: '#6D7278',
    fontFamily: FontFamily.appFontMedium,
  },
  detailValue: {
    width: width(40),
    alignSelf: 'flex-end',
    fontSize: 14,
    fontFamily: FontFamily.appFontLight,
    textAlign: 'right',
    color: '#000',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  footerText: {
    width: width(85),
    zIndex: 100,
    fontFamily: FontFamily.appFontLight,
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  footerLogo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  line: {
    width: width(90),
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    marginBottom: width(4),
    borderColor: '#979797',
  },
  shareButton: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Preview2;
