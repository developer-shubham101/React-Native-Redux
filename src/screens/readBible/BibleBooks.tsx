import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { ThemeContext } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import useBibleList from '../../hooks/useBibleList';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { BookList } from '../../type';
import { readBook } from '../../actions';
import { useDispatch } from 'react-redux';
import {
  NAVIGATION_BIBLE_CHAPTERS,
  NAVIGATION_DASHBOARD,
} from '../../navigation/routes';

const BibleBooks = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { bookList } = useBibleList();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={bookList}
        renderItem={({ item }: { item: BookList }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(readBook(item));
              navigation.navigate(NAVIGATION_BIBLE_CHAPTERS);
            }}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.nameLong}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default BibleBooks;
