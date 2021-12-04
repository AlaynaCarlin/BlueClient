import React, { useState, useEffect } from 'react';

import {Container, Row, Col} from 'reactstrap';
import GetLogs from './GetLogs';
import LogFood from './CreateLog';
import UpdateFood from './UpdateLog';
const LogIndex = (props) => {
    const [foodLogs, setFoodLogs] = useState([]);

    const fetchLogs = () => {
        fetch('http://localhost:3000/log/mine', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then ((res) => res.json())
            .then ((logData) => {
                setFoodLogs(logData);
                console.log(logData);
            })
    }

    useEffect(() => {
        fetchLogs();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <LogFood fetchLogs={fetchLogs} token={props.token}></LogFood>
                </Col>
                <Col md="9">
                    <GetLogs foodLogs={foodLogs} fetchLogs={fetchLogs} token={props.token}/>
                </Col>
                <UpdateFood fetchLogs={fetchLogs} token={props.token}></UpdateFood>
            </Row>
        </Container>
    )
}

export default LogIndex;