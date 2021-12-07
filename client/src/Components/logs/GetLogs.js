import React, { useState } from "react";
import { Table, Button } from "reactstrap";
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

    const deleteFoodLog = (id) => {
        fetch(`/api/logs/${id}`, {
            method: "DELETE",
            headers: new Headers(
                'Content-Type', 'application/json',
                'Authorization', `Bearer ${localStorage.getItem('token')}`
            )
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                props.getLogs()
            })
            .catch(err => console.log(err))
    }

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
                    <td><Button color="warning" onClick={() => {props.editFoodLogs(log.id); props.updateOn()}} >Update</Button></td>
                    <td><Button color="danger" onClick={() => deleteFoodLog(log)}>Delete</Button></td>
                </tr>
            );
        });
    };

    const findCurrentDay = () => {        //compares dates and displays same dates
        const dateToday = new Date(Date.now()).toISOString().slice(0, 10);
        // console.log(dateToday)
        setSpecificDateArr(props.foodLogs.filter(log => {       //filtered array = global array
            return log.date.slice(0, 10) === dateToday       //filtered array is comparing all dates to today.
        }));
        setIsSpecific(!isSpecific)  //toggle to clear
    }

    const findLastWeek = () => {
        const dateToday = new Date(Date.now()).toISOString().slice(0, 10);
        const lastWeek = props.foodLogs.filter(log => {
            return log.date.slice(0, 10) === (dateToday);
        });
        // lastWeek.setDate(lastWeek.getDate() - 7);
        setSpecificDateArr(lastWeek)
        setIsSpecific(!isSpecific)
    }

    //   function lastSevenDays () {
    //     let result = [];
    //     for (let i=0; i<7; i++) {
    //         let d = new Date();
    //         d.setDate(d.getDate() - i);
    //         result.push(d.toISOString().slice(0, 6));
    //     }

    //     return(result.join(','));
    // }

    return (
        <>
            <h3>Log History</h3>
            <Button onClick={findCurrentDay}>Current Day</Button>
            <Button onClick={findLastWeek}>Last Week</Button>
            <Button>Last 30 Days</Button>
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
                <tbody>
                    {deleteFoodLog()}
                </tbody>

            </Table>

        </>
    );
};

export default LogTable;
