import React from "react";
import {Table, Button} from 'reactstrap';


const LogTable = (props) => {

    const logMapper = () => {
        return props.foodLogs.map((log, index) => {
            return(
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

    // const dayMap = () => {

    //     {props.}
        
    // }

    return(
        <>
        <h3>Log History</h3>
        <tbody>
        
        </tbody>
        <hr/>
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
            {dayMap()}
           {/* {logMapper()}  */}
        </tbody>
        </Table>
        </>
    )
}

export default LogTable;