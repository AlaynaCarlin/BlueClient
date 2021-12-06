import React from "react";
import { Table, Button } from 'reactstrap';

const LogTable = (props) => {
    const logMapper = () => {
        console.log(props.foodLogs)
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
                    <td>
                        <Button color="warning">Update</Button>
                    </td>
                    <td>
                        <Button color="danger">Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    // const dayLogs = () => {
    //     const dateToday = new Date(Date.now()).toISOString().slice(0, 10);
    //     console.log(dateToday);
    //     for (let i = 0; i < props.foodLogs.length; i++) {
    //         if (props.foodLogs[i].date === dateToday) {
    //             console.log[i];
    //             const date = props.foodLogs?.filter(log => log.date === dateToday);
    //             return props.foodLogs?.map((log, index) => {
    //                 return (
    //                     <tr key={i}>
    //                         <th scope='row'>{log.id}</th>
    //                         <td>{[i].what}</td>
    //                         <td>{[i].where}</td>
    //                         <td>{[i].calories}</td>
    //                         <td>{[i].category}</td>
    //                         <td>{[i].date}</td>
    //                         <td>{[i].photo}</td>
    //                         <td>{[i].feelings}</td>
    //                     </tr>
    //                 )
    //             })
    //         }

        return (
            <>
                <h3>Log History</h3>
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
                    </tbody>
                    <tbody>
                        {/* {logMapper()} */}
                    </tbody>
                </Table>
            </>
        )
    }
    export default LogTable;
