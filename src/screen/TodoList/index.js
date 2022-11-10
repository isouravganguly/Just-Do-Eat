import React from 'react';
import {View, SafeAreaView} from 'react-native';

//User-defined components
import HeaderComponent from '../../component/Header';
import FilterComponent from '../../component/Filters';
import ListComponent from '../../component/List';
import InputComponent from '../../component/Input';

//styles --
import styles from './styles';


const TodoList = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <HeaderComponent />
      <FilterComponent />
      <ListComponent />
      <InputComponent />
      </SafeAreaView>
    </View>
  );
};

export default TodoList;
