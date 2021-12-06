import React from "react";
import { Table, Button } from 'reactstrap';


const LogTable = (props) => {
    // console.log(props.foodLogs[0].date)
    const logMapper = () => {

        return props.foodLogs?.map((log, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{log.id}</th>
                    <td>{log.what}</td>
                    <td>{log.where}</td>
                    <td>{log.calories}</td>
                    <td>{log.category}</td>
                    <td>{log.date}</td>
                    <td>{log.photo}</td>
                    <td>{log.feelings}</td>
                </tr>
            )
        })
    }

    const dayLogs = () => {
        const dateToday = new Date(Date.now()).toISOString().slice(0, 10); //correctly formatted date
         console.log(dateToday);
        //  console.log(props.foodLogs[1].date);

        for (let i = 0; i <= props.foodLogs.length; i++) { // loop through all food logs
            let dates = props.foodLogs[i].date.slice(0, 10); //trying to format this but it doesn't want to see date's value
            console.log(dates);
            if (props.foodLogs[i] === dateToday) { //checks if the dates res the same
                console.log(i);
                return (
                    <tr index={i}>
                        <th scope="row">{[i].id}</th>
                        <td>{[i].what}</td>
                        <td>{[i].where}</td>
                        <td>{[i].calories}</td>
                        <td>{[i].category}</td>
                        <td>{[i].date}</td>
                        <td>{[i].photo}</td>
                        <td>{[i].feelings}</td>
                    </tr>
                )
            } else {
                console.log('there was an error');
            }
        }

    }





    return (
        <>
            <h3>Log History</h3>
            <tbody>

            </tbody>
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
                    {dayLogs()}
                    {/* {logMapper()}  */}
                </tbody>
            </Table>
        </>
    )
}

export default LogTable;