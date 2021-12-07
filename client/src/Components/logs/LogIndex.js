import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GetLogs from './GetLogs';
import LogFood from './CreateLog';
import UpdateFood from './UpdateLog';

const LogIndex = (props) => {
    const [foodLogs, setFoodLogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [logToUpdate, setLogToUpdate] = useState({});

    const fetchLogs = async () => {
        await fetch('http://localhost:3000/log/mine', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                setFoodLogs(logData);
                console.log(logData);
            })
    }
    const editUpdateLog = (foodLogs) => {
        setLogToUpdate(foodLogs);
        console.log(foodLogs);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchLogs();
    }, [])

console.log(foodLogs)
    return (

        <Container>
            <Row>
                <Col md="3">
                    <LogFood fetchLogs={fetchLogs} token={props.token}></LogFood>
                </Col>
                <Col md="9">
                    {foodLogs !== {} ? <GetLogs  foodLogs={foodLogs} fetchLogs={fetchLogs} editUpdateLog={editUpdateLog} updateOn={updateOn} token={props.token} /> : ""}
                    {/*  */}
                </Col>
                <Col>
                {updateActive ? <UpdateFood logToUpdate={logToUpdate} editUpdateLog={editUpdateLog}
                updateOff={updateOff} token={props.token} fetchLogs={fetchLogs}/> : <></>} 
                </Col>
            </Row>
        </Container>
    )
}

export default LogIndex;