import {StyleSheet, View, TextInput, Button} from 'react-native';
import {useState} from 'react';

function GoalInput(props){
    const [enterGoalText, setEnterGoalText] = useState('');
    
    function goInputHandlar(enterText){
        setEnterGoalText(enterText);
      };

    // This code is simple Step-1
    function addGoalHandlar(){
        props.onAddGoal(enterGoalText);
    };


    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}  placeholder='Your Course Goal' onChangeText={goInputHandlar}/>
            {/* <Button title='Add Goal' onPress={addGoalHandlar}/> */}
            {/* Here i changed code insted of methods (Step-2) */}
            <Button title='Add Goal' onPress={(hello)=> {props.onAddGoal(enterGoalText)}} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
      },
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});