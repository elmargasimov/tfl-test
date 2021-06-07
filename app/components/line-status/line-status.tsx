import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { ILine } from '../../types/types';

const LineColoursRGB: Record<string, string> = {
  'circle': '255,211,41',
  'bakerloo': '178,99,0',
  'central': '220,36,31',
  'hammersmith-city': '244,169,190',
  'northern': '0,0,0',
  'piccadilly': '0,25,168',
  'jubilee': '161,165,167',
  'metropolitan': '155,0,88',
  'waterloo-city': '147,206,186',
  'victoria': '0,152,216',
  'district': '0,125,50',
}

const toUnique = (lineStatuses) => lineStatuses.reduce((acc, status) => {
  const { statusSeverityDescription } = status;
  acc.set(statusSeverityDescription, true);
  return acc;
}, new Map);

const LineStatus: React.FC<ILine> = ({ name, id, lineStatuses }) => {
  // Prevent same statuses being displayed multiple times
  const uniqueStatusMap = toUnique(lineStatuses);

  return (
    <View>
      <View style={{...styles.lineBlock, borderLeftColor: `rgb(${LineColoursRGB[id]})`}}>
        <Text style={styles.lineTitle}>{name}</Text>
        <View style={styles.lineStatuses}>
          {[...uniqueStatusMap].map((disruption, index) => (
            <Text key={index} style={styles.lineStatus}>{disruption}</Text>
          ))}
        </View>
      </View>
      <View style={styles.border} />
    </View>
  )
};

const styles = StyleSheet.create({
  lineBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    borderLeftWidth: 10,
    borderBottomColor: '#222',
  },
  lineTitle: {
    width: '50%',
    fontSize: 18,
    color: '#999'
  },
  lineStatuses: {
    width: '50%',
  },
  lineStatus: {
    textAlign: 'right',
    color: '#222'
  },
  border: {
    height: 1,
    backgroundColor: '#222',
  }
});

export default LineStatus;
