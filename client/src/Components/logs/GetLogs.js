import React from "react";
import {Table, Button} from 'reactstrap';


const LogTable = (props) => {
console.log(props.foodLogs[0].date)
    const logMapper = () => {
        
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
                </tr>
            )
        })
    }

    const dayLogs = () => {
        // const dateToday = new Date(Date.now()).toLocaleDateString();
        const dateToday = new Date(Date.now()).toISOString();
        console.log(dateToday);
        console.log(props.foodLogs[1]);
        // dateToday === props.foodLogs[1].date ? console.log(props.foodLogs[1].date) : console.log("doesn't match")
        for (let i = 0; i <= props.foodLogs.length; i++ ){
            if(props.foodLogs[i] === dateToday){
                console.log(i);
                return(
                    <tr key={i}>
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
        
            // return(
            //     <tr>
            //         <th scope="row">{log.id}</th>
            //         <td>{log.what}</td>
            //         <td>{log.where}</td>
            //         <td>{log.calories}</td>
            //         <td>{log.category}</td>
            //         <td>{log.date}</td>
            //         <td>{log.photo}</td>
            //         <td>{log.feelings}</td>
            //     </tr>
            // )
        }
    
        
    
    

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
            {dayLogs()}
           {/* {logMapper()}  */}
        </tbody>
        </Table>
        </>
    )
}

export default LogTable;