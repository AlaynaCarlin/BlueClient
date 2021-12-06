import React from "react";
import { Table, Button } from "reactstrap";

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
          <td>{log.date.slice(0, 10)}</td>
          <td>{log.photo}</td>
          <td>{log.feelings}</td>
        </tr>
      );
    });
  };

  const dayLogs = () => {
    const dateToday = new Date(Date.now()).toISOString().slice(0, 10); //correctly formatted date
    let date;

    props.foodLogs.map((log, index) => {
      console.log(log.date);
      date = log.date.slice(0, 10);
      if (date === dateToday) {
        return (
          <tr key={index}>
            <th scope="row">{log.id}</th>
            <td>{log.what}</td>
            <td>{log.where}</td>
            <td>{log.calories}</td>
            <td>{log.category}</td>
            <td>{dateToday}</td>
            <td>{log.photo}</td>
            <td>{log.feelings}</td>
          </tr>
        );
      } else {
        console.log("there was an error");
      }
    });
  };

  return (
    <>
      <h3>Log History</h3>
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
          {dayLogs()}
          {logMapper()}
        </tbody>
      </Table>
    </>
  );
};

export default LogTable;
