import React from "react";
import {Table, Button} from 'reactstrap';


const LogTable = (props) => {

    const logMapper = () => {
        console.log(props.foodLogs)
        return props.foodLogs?.map((log, index) => {
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

    // const dayMap = () => {
    //     return props.foodLogs.filter((log, date) => {
    //         return(

    //         )
    //     })
    // }

    return(
        <>
        <h3>Log History</h3>
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
           {logMapper()} 
        </tbody>
        </Table>
        </>
    )
}

export default LogTable;