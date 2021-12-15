import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment';

const LogFood = (props) => {
    const [what, setWhat] = useState('');
    const [where, setWhere] = useState('');
    const [calories, setCalories] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [photo, setPhoto] = useState('');
    const [feelings, setFeelings] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${APIURL}/log/create`, {
            method: 'POST',
            body: JSON.stringify({ log: { what: what, where: where, calories: calories, category: category, date: date, photo: photo, feelings: feelings } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                setWhat('');
                setWhere('');
                setCalories('');
                setCategory('');
                setDate('');
                setPhoto('');
                setFeelings('');
                props.fetchLogs();
            })
    }

    return (
        <>
            <h3 className="logHeadings">Log a Meal</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col>
                    <Label htmlFor="what" >What I 8</Label>
                    <Input name="what" type="text" placeholder="I 8 That" value={what} onChange={(e) => setWhat(e.target.value)} />
                </Col>
                <Col>
                    <Label htmlFor="where" >Where I 8</Label>
                    <Input name="where" type="text" placeholder="I 8 Here" value={where} onChange={(e) => setWhere(e.target.value)} />
                </Col>
                <Col>
                    <Label htmlFor="calories" >Calories</Label>
                    <Input name="calories" type="text" placeholder="'240'" value={calories} onChange={(e) => setCalories(e.target.value)} />
                </Col>
                <Col>
                    <Label htmlFor="category" >Category</Label>
                    <Input name="category" type="select" placeholder="Click the Dropdown" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option></option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dinner">Dessert</option>
                        <option value="Snack">Snack</option>
                    </Input>
                </Col>
                <Col>
                    <Label htmlFor="date" >Date I 8</Label>
                    <Input name="date" type="date" placeholder="mm/dd/yyyy" value={date} onChange={(e) => setDate(e.target.value)} />
                </Col>
                <Col>
                    <Label htmlFor="photo" >Photo Upload</Label>
                    <Input id='exampleFile' name="file" type="file" placeholder="-> Upload Here <-" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </Col>
                <Col>
                    <Label htmlFor="feelings" >I'm Feeling (?)</Label>
                    <Input name="feelings" type="text" placeholder="I feel full..." value={feelings} onChange={(e) => setFeelings(e.target.value)} />
                </Col>
                <Col>
                <Button style={{margin:'2vw'}} type="submit">Log It!</Button>
                </Col>
                </Row>
            </Form>
        </>
    )
}
export default LogFood;