import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'reactstrap';
import GetLogs from './GetLogs';
import { useEffect, useState } from 'react';
import { CreateLog } from './logs/CreateLog';
const LogIndex = (props) => {
    const [workouts, setWorkouts] = useState([]);

    const fetchLogs = () => {
        fetch('http://localhost:3000/log/mine', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then ((res) => res.json())
            .then ((logData) => {
                setLogs(logData);
                console.log(logData);
            })
    }

    return(
        <Container>
            <Row>
                <Col md="3">
                    {/* {create component} */}
                </Col>
                <Col md="9">
                    {/* {workout table} */}
                </Col>
            </Row>
        </Container>
    )
}

export default LogIndex;