import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {images} from '~assets/images';
import {width} from '~utils';

const DropdownComponent = ({value, setValue, data, w}: any) => {
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Image
            source={images.tick}
            resizeMode="contain"
            style={{width: width(5), height: width(4)}}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={[styles.dropdown, {width: w ?? width(90)}]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderRightIcon={() => (
        <Image
          style={{width: 13, height: 13}}
          source={images.more}
          resizeMode="contain"
        />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 8,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderColor: '#346ACB',
    borderWidth: 1.5,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#346ACB',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
});
