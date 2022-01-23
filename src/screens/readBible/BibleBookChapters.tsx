import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import useBibleList from '../../hooks/useBibleList';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { BookList, Chapter } from '../../type';
import useBibleChapter from '../../hooks/useBibleChapter';
import BibleBookChapterItem from './BibleBookChapterItem';
import useBibleVerses from '../../hooks/useBibleVerses';
import { NAVIGATION_BIBLE_VERVES } from '../../navigation/routes';

const BibleBookChapters = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const { currentBook, loading } = useBibleChapter();
  const { /* currentBook, loading, */ verse, getVerses } = useBibleVerses();

  useEffect(() => {}, []);
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>{currentBook?.name}</Text>
        <Text>{currentBook?.nameLong}</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={currentBook?.chapters ?? []}
        renderItem={({ item }: { item: Chapter }) => (
          <TouchableOpacity
            onPress={() => {
              getVerses(item.id, item.bookId);
              navigation.navigate(NAVIGATION_BIBLE_VERVES, { id: item.id });
            }}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text>{item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default BibleBookChapters;
