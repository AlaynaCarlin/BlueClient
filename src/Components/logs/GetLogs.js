import React, { useState } from "react";
import { Table, Button, Row, Col } from "reactstrap";
import UpdateFood from "./UpdateLog";

//create a function to pull the logs from the database by date

// const mapStateToProps = (state) => {
//     return {
//         logs: state.logs,
//     };
// };

const LogTable = (props) => {
    const [isSpecific, setIsSpecific] = useState(false)
    const [specificDateArr, setSpecificDateArr] = useState([])    //global variable

    const deleteFoodLog = (log) => {
        fetch(`http://localhost:3000/log/delete/${log.id}`, {
            method: "DELETE",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
            .then(data => {
                console.log(data)
                props.fetchLogs()
            })
            .catch(err => console.log(err))
    }

    const logMapper = () => {         //mapping over all the logs
        let logs = isSpecific ? specificDateArr : props.foodLogs //isSpecific by default is false and we need to check if it's true or false so we know what array to map over. If true, map over specificDateArr. If false, map over entire foodLog array
        return logs.map((log, index) => {       //logs is a variable variable. Checks btwn sets of data
            return (
              <div id='logList'>
              <ul style={{border:'2px solid black', width:'18vw'}}>
                <li>Log {index}</li>
                <li>{log.what}</li>
                <li>{log.where}</li>
                <li>{log.calories}</li>
                <li>{log.category}</li>
                <li>{log.date.slice(0, 10)}</li>
                <li>{log.photo}</li>
                <li>{log.feelings}</li>
                <li style={{padding:'0.5vw'}}><Button style={{color:'orange'}} onClick={() => {props.editUpdateLog(log); props.updateOn()}} >Update</Button></li>
                <li style={{padding:'0.5vw'}}><Button style={{color:'yellow'}} onClick={() => {deleteFoodLog(log)}}>Delete</Button></li>
              </ul>
              </div>
                // <tr key={index}>
                //     <th scope="row">{log.id}</th>
                //     <td>{log.what}</td>
                //     <td>{log.where}</td>
                //     <td>{log.calories}</td>
                //     <td>{log.category}</td>
                //     <td>{log.date.slice(0, 10)}</td>
                //     <td>{log.photo}</td>
                //     <td>{log.feelings}</td>
                //     <td><Button color="warning" onClick={() => {props.editUpdateLog(log); props.updateOn()}} >Update</Button></td>
                //     <td><Button color="danger" onClick={() => {deleteFoodLog(log)}}>Delete</Button></td>
                // </tr>
            );
        });
    };

  const findCurrentDay = () => {        //compares dates and displays same dates
    const dateToday = new Date(Date.now()).toISOString().slice(0, 10);
    
    // console.log(props.foodLogs[4].date);
    console.log(dateToday);
    setSpecificDateArr(props.foodLogs.filter(log => {       //filtered array = global array
        return log.date.slice(0,10) === dateToday  
        //filtered array is comparing all dates to today.
    })); 
    setIsSpecific(!isSpecific)  //toggle to clear
  }

  const lastSevenDays = () => {
    const date = new Date();
    const sevenDaysAgo = new Date(date);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const lastWeek = props.foodLogs.filter(log => new Date(log.date) > sevenDaysAgo);
    // lastWeek.setDate(lastWeek.getDate() - 7);
    // console.log(props.foodLogs[0].date, sevenDaysAgo);
    console.log(lastWeek);
    setSpecificDateArr(lastWeek)
    setIsSpecific(!isSpecific)
  }

  const lastThirtyDays = () => {
    const date = new Date();
    const thirtyDaysAgo = new Date(date);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const lastMonth = props.foodLogs.filter(log => new Date(log.date) > thirtyDaysAgo);
    // lastWeek.setDate(lastWeek.getDate() - 7);
    console.log(props.foodLogs[0].date, thirtyDaysAgo);
    console.log(lastMonth);
    setSpecificDateArr(lastMonth)
    setIsSpecific(!isSpecific)
  }



//   function lastSevenDays () {
//     let result = [];
//     for (let i=0; i<7; i++) {
//         let d = new Date();
//         d.setDate(d.getDate() - i);
//         result.push(d.toISOString().slice(0, 6));
//     }


  return (
    <>
      <h3>Log History</h3>
      <Row>
      <Col><Button onClick={findCurrentDay}>Current Day</Button></Col>
      <Col><Button onClick={lastSevenDays}>Last Week</Button></Col>
      <Col><Button onClick={lastThirtyDays}>Last 30 Days</Button></Col>
      </Row>
      <tbody></tbody>
      <hr />
      {/* <Table striped style={{display:"flex"}}>
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
        </Table> */}
        <tbody>
          <Row style={{overflow:'scroll', height:'50vh'}}>
          {logMapper()}
          </Row>
        </tbody>
      
    
    </>
  );
};

export default LogTable;
