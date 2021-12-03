import React from "react";
import {Table, Button} from 'reactstrap';


const LogTable = (props) => {
    return(
        <>
        <h3>Log History</h3>
        <hr/>
        <Table boxed>
        <thead>
            <tr>
                <th>#</th>
                <th>What</th>
                <th>Where</th>
                <th>Calories</th>
                <th>Category</th>
                <th>Feelings</th>
                <th>Date</th>
                <th>Photo</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
        </Table>
        </>
    )
}

export default LogTable;