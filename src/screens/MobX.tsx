import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import Converter from '../store/mobX';
import styles from './styls';

const Mobx = observer(() => {
  const converterStore = new Converter();

  const {
    setMass,
    mass,
    isMetric,
    setLength,
    length,
    setInch,
    inch,
    onConvertToImperial,
    onConvertToMetric,
  } = converterStore;
  console.log(isMetric, 'isMetric');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput />
      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
          style={styles.mass}
          onChangeText={setMass}
          value={mass}
          placeholder={isMetric ? 'KG' : 'lbs'}
        />
        <View style={{height: 50, flexDirection: 'row', width: '90%'}}>
          <TextInput
            style={styles.length}
            onChangeText={setLength}
            value={length}
            placeholder={isMetric ? 'm' : 'ft'}
          />
          {!isMetric && (
            <TextInput
              style={styles.length}
              onChangeText={setInch}
              value={inch}
              placeholder={'in'}
            />
          )}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={[
            styles.button,
            {backgroundColor: isMetric ? 'white' : 'purple'},
          ]}
          onPress={onConvertToImperial}>
          <Text
            style={[
              styles.buttonTitle,
              {color: isMetric ? 'purple' : 'white'},
            ]}>
            {'Imperial'}
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            {backgroundColor: isMetric ? 'purple' : 'white'},
          ]}
          onPress={onConvertToMetric}>
          <Text
            style={[
              styles.buttonTitle,
              {color: isMetric ? 'white' : 'purple'},
            ]}>
            {'Metric'}
          </Text>
        </Pressable>
      </View>
      <Pressable>
        <Text>{'Save to Disk'}</Text>
      </Pressable>
      <Pressable>
        <Text>{'Reset'}</Text>
      </Pressable>
    </View>
  );
});

export default Mobx;
