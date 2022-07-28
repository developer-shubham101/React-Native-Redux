import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Chapter } from '../../type';
import useBibleVerses from '../../hooks/useBibleVerses';
import { SafeAreaView } from 'react-native-safe-area-context';

const BibleBookVerse = ({ navigation, route }) => {
  const { /* currentBook, loading, */ verse, getVerses } = useBibleVerses(
    route.params.id,
  );

  useEffect(() => {}, []);
  /* if (loading) {
    return <ActivityIndicator size={'large'} />;
  } */

  const fetchVerse = (verse) => {
    var listOfText = [];
    for (const iterator of verse) {
      listOfText.push(iterator.text);
      listOfText.push(' ');
    }
    console.log(listOfText.join(''));

    return listOfText.join('');
  };

  const fetchPara = (verse) => {
    var listOfText: string[] = [];
    for (const iterator of verse) {
      if (iterator.type == 'tag' && iterator.name == 'verse') {
        listOfText.push('\n\n');
        listOfText.push(fetchVerse(iterator.items));
      } else if (iterator.type == 'text') {
        listOfText.push(iterator.text);
      } else {
        console.log('TODO:- ' + iterator.type);
      }
    }
    console.log(listOfText.join(''));

    return listOfText.join('');
  };

  const displayText = (verse) => {
    var listOfText: string[] = [];
    for (const iterator of verse) {
      if (iterator.type == 'tag' && iterator.name == 'para') {
        listOfText.push(fetchPara(iterator.items));
      } else if (iterator.type == 'tag' && iterator.name == 'verse') {
        listOfText.push(fetchVerse(iterator.items));
        listOfText.push('\n\n');
      } else if (iterator.type == 'text') {
        listOfText.push(iterator.text);
      } else {
        console.log('TODO:- ' + iterator.type);
      }
    }
    console.log(listOfText.join(''));

    return listOfText;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          {/* <Text>{item.id}</Text> */}

          {verse ? <Text>{verse}</Text> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default BibleBookVerse;
