import React, { useState, userEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const logFood = (props) => {
    const [what, setWhat] = useState('');
    const [where, setWhere] = useState('');
    const [calories, setCalories] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [photo, setPhoto] = useState('');
    const [feelings, setFeelings] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/log/', {
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
                setCalories('')
                setCategory('');
                setDate('');
                setPhoto('')
                setFeelings('')
                props.fetchLog();
            })
    }

    return (
        <>
            <h3>Log a Meal</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="what" />
                    <Input name="what" value={what} onChange={(e) => setWhat(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="where" />
                    <Input name="where" value={where} onChange={(e) => setResult(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="calories" />
                    <Input name="calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="category" />
                    <Input type="select" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date" />
                    <Input name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="photo" />
                    <Input name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="feelings" />
                    <Input name="feelings" value={feelings} onChange={(e) => setFeelings(e.target.value)} />
                </FormGroup>
                <Button type="submit">Log</Button>
            </Form>
        </>
    )
}
export default Log;