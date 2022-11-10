import React from 'react'
import {FlatList, View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo, done} from '../../redux/TaskReducer';

//User-defined Components --
import Card from '../../component/Card';

//styles --
import styles from './styles';

const List = () => {

  const tasks = useSelector(state => state.todoapp) // All todo tasks
  const filter = useSelector(state => state.filter) // Selected Filter

  const dispatch = useDispatch();


  // Make the List to render in FlatList
  const makeTheList = ()=>{

    if(filter.filter === "all"){
      return tasks    //Return whole array
    }
    else if( filter.filter === "completed"){
      return tasks.filter(task => task.done === true)
    }
    else if( filter.filter === "active"){
      return tasks.filter(task => task.done === false)
    }
  }

  const onDelete = id => { // Delete button is clicked
    dispatch(
      deleteTodo({
        id: id,
      }),
    );
  };

  const onDone = id => { // "Done"/checkbox button is clicked
    dispatch(
      done({
        id: id,
      }),
    );
  };

  const taskList = makeTheList() // Save "List to be rendered"

  return (
    <View style = {styles.taskList} >

      {taskList && (
        <FlatList
          data={taskList}
          renderItem={({item}) => {
            return <Card item={item} onDelete={onDelete} onDone={onDone} />; // Card component -- Each task
          }}
          extraData = {tasks}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  )
}

export default List