import React, {useState} from "react";
import { Table, Button } from "reactstrap";

const LogTable = (props) => {
  const [isSpecific, setIsSpecific] = useState(false)
  const [specificDateArr, setSpecificDateArr] = useState([])    //global variable


  const logMapper = () => {         //mapping over all the logs
    let logs = isSpecific ? specificDateArr : props.foodLogs //isSpecific by default is false and we need to check if it's true or false so we know what array to map over. If true, map over specificDateArr. If false, map over entire foodLog array
    return logs.map((log, index) => {       //logs is a variable variable. Checks btwn sets of data
      return (
        <tr key={index}>
          <th scope="row">{log.id}</th>
          <td>{log.what}</td>
          <td>{log.where}</td>
          <td>{log.calories}</td>
          <td>{log.category}</td>
          <td>{log.date.slice(0, 10)}</td>
          <td>{log.photo}</td>
          <td>{log.feelings}</td>
        </tr>
      );
    });
  };

  const findCurrentDay = () => {        //compares dates and displays same dates
    const dateToday = new Date(Date.now()).toISOString().slice(0, 10);
    // console.log(dateToday)
    setSpecificDateArr(props.foodLogs.filter(log => {       //filtered array = global array
        return log.date.slice(0,10) === dateToday       //filtered array is comparing all dates to today.
    })); 
    setIsSpecific(!isSpecific)  //toggle to clear
  }

  const findLastWeek = () => {
    const dateToday = new Date(Date.now()).toISOString().slice(0, 10);
    const lastWeek = props.foodLogs.filter(log => {
        return log.date.slice(0, 10) ===  (dateToday);
    });
    // lastWeek.setDate(lastWeek.getDate() - 7);
    setSpecificDateArr(lastWeek)
    setIsSpecific(!isSpecific)
  }



  return (
    <>
      <h3>Log History</h3>
      <Button onClick={findCurrentDay}>Current Day</Button>
      <Button onClick={findLastWeek}>View Last Week</Button>
      <Button>View Last 30 Days</Button>
      
      <tbody></tbody>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>What</th>
            <th>Where</th>
            <th>Calories</th>
            <th>Category</th>
            <th>Date</th>
            <th>Photo</th>
            <th>Feelings</th>
          </tr>
        </thead>
        <tbody>
          {logMapper()}
        </tbody>
        
      </Table>
      
    </>
  );
};

export default LogTable;
