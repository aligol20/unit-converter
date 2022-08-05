import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import styles from './styls';

const Hooks = () => {
  const [isMetric, setIsMetric] = useState(false);
  const [mass, setMass] = useState('');
  const [length, setLength] = useState('');
  const [inch, setInch] = useState('');

  const onConvertToMetric = () => {
    setIsMetric(true);
    setMass((+mass / 2.2).toString());
    let tempMeter = ((+inch + +length * 12) / 39.3701).toFixed(2);
    setLength(tempMeter);
  };
  const onConvertToImperial = () => {
    setIsMetric(false);
    setMass((+mass * 2.2).toString());
    let tempFoot = ((+length * 39.3701) / 12).toFixed(0);
    let tempInch = ((+length * 39.3701) % 12).toFixed(2);
    setLength(tempFoot);
    setInch(tempInch);
  };
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
};

export default Hooks;
