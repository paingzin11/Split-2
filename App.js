import { useState } from 'react';
import { StyleSheet, Text,  View,  FlatList } from 'react-native';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoal, setCourseGoal] = useState([]);

  

  function addGoalHandlar(enterGoalText){
    // Prameter text insert 
    setCourseGoal((currentCourseGoal)=>[
      ...currentCourseGoal, 
      { text:enterGoalText, key: Math.random().toString()}]
      );
  }

  return (
    <View style={styles.appcontainer}>
      {/* This code is Changed */}
      <GoalInput onAddGoal={addGoalHandlar}/>
      {/* ******************************** */}
      <View style={styles.goalContainer}>
          <FlatList data={courseGoal} renderItem={(itemData)=> {
              return(
                <View style={styles.goalItem}>
                    <Text style={styles.goalText}>
                      {itemData.item.text}
                    </Text>
                </View>
              );
          }}>
          </FlatList>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalContainer: {
    flex:5,
  }, 

  goalItem: {
    margin: 8,
    padding: 8, 
    borderRadius: 6,    
    backgroundColor: '#5e0acc',
  }, 
  goalText:{
      color: 'white',
  },
});
