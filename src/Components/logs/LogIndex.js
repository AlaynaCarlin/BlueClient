import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GetLogs from './GetLogs';
import LogFood from './CreateLog';
import UpdateFood from './UpdateLog';
import APIURL from '../../helpers/environment';

const LogIndex = (props) => {
    const [foodLogs, setFoodLogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [logToUpdate, setLogToUpdate] = useState({});

    const fetchLogs = async () => {
        // **
        await fetch(`${APIURL}/log/mine`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                setFoodLogs(logData);
                // console.log(logData);
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

        <Container className='logStyle'>
                <Row className='createLogs'>
                    <LogFood fetchLogs={fetchLogs} token={props.token}></LogFood>
                </Row>
                <Row className='getLogs'>
                    {foodLogs !== {} ? <GetLogs  foodLogs={foodLogs} fetchLogs={fetchLogs} editUpdateLog={editUpdateLog} updateOn={updateOn} token={props.token} /> : ""}
                    {/*  */}
                </Row>
                <Col>
                {updateActive ? <UpdateFood logToUpdate={logToUpdate}
                updateOff={updateOff} token={props.token} fetchLogs={fetchLogs}/> : <></>} 
                </Col>
        </Container>
    )
}

export default LogIndex;