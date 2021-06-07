import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import LineStatus from '../../components/line-status/line-status';
import { getLineStatus } from '../../services/get-line-status';
import { ILine } from '../../types/types';
import RefreshTextBlock from "../../components/refresh-block/refresh-block";

const HomeScreen = () => {
  const [lineStatus, setLineStatus] = useState<ILine[]>([]);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const getData = () : Promise<void> => {
    setIsLoading(true);
    return getLineStatus()
      .then(response => {
        setLineStatus(response);
        setLastRefresh(new Date());
        setIsLoading(false);
        console.log('refreshing data')
      })
      .catch(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getData();
  }, [lineStatus.toString()]);

  const renderItem = ({ item }) => <LineStatus {...item} />;

  return (
    <View>
      <RefreshTextBlock time={lastRefresh} />
      <FlatList
        data={lineStatus}
        renderItem={renderItem}
        onRefresh={getData}
        refreshing={isLoading}
        keyExtractor={item => item.id}
      />
    </View>
  );
}


export default HomeScreen;
