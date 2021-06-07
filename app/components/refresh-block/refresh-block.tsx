import moment from "moment";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

interface Props {
  time: Date;
}

const RefreshTextBlock: React.FC<Props> = ({ time }) => {
  const lastRefreshed = moment(time).calendar();
  const lastRefreshText = `Last refreshed ${lastRefreshed}`;

  return (
    <View
      style={styles.refreshBlock}
    >
      <Text>{lastRefreshText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  refreshBlock: {
    padding: 20,
  }
});

export default RefreshTextBlock;
