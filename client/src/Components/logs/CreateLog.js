import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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

        fetch('http://localhost:3000/log/create', {
            method: 'POST',
            body: JSON.stringify({ log: { what: what, where: where, calories: calories, category: category, date: date, photo: photo, feelings: feelings  } }),
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
            <h3>Log a Meal</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="what" >what I 8</Label>
                    <Input name="what" type="text" placeholder="bagel" value={what} onChange={(e) => setWhat(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="where" >where I 8 it</Label>
                    <Input name="where" type="text" placeholder="McDonald's" value={where} onChange={(e) => setWhere(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="calories" >calories consumed</Label>
                    <Input name="calories" type="text" placeholder="240" value={calories} onChange={(e) => setCalories(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="category" >category</Label>
                    <Input type="select" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date" >Date</Label>
                    <Input name="date" type="date" placeholder="mm/dd/yyyy" value={date} onChange={(e) => setDate(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="photo" >photo</Label>
                    <Input name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="feelings" >feels</Label>
                    <Input name="feelings" type="text" placeholder="full" value={feelings} onChange={(e) => setFeelings(e.target.value)} />
                </FormGroup>
                <Button type="submit">Log</Button>
            </Form>
        </>
    )
}
export default LogFood;