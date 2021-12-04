import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";

const UpdateFood = (props) => {
    const [editWhat, setEditWhat] = useState(props.logToUpdate.what);
    const [editWhere, setEditWhere] = useState(props.logToUpdate.where);
    const [editCal, setEditCal] = useState(props.logToUpdate.calories);
    const [editCat, setEditCat] = useState(props.logToUpdate.category);
    const [editDate, setEditDate] = useState(props.logToUpdate.date);
    const [editPhoto, setEditPhoto] = useState(props.logToUpdate.photo);
    const [editFeel, setEditFeel] = useState(props.logToUpdate.feelings);

    const foodUpdate = (event, log) => { //check to see where the "log" is supposed to be called. 
        event.preventDefault();
        fetch(`http://localhost:3000/log/${props.logToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ log: { what: editWhat, where: editWhere, calories: editCal, category: editCat, date: editDate, photo: editPhoto, feelings: editFeel } }), //diving into response and setting the values to the state variables that you declared above
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            props.fetchFoodLogs(); // Might be something to look at for line 30 in LogIndex if fetch isn't working
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Log a Meal</ModalHeader>
            <ModalBody>
                <Form onSubmit={foodUpdate}>
                    <FormGroup>
                        <Label htmlFor="what">Edit Meal:</Label>
                        <Input
                            name="what"
                            value={editWhat}
                            onChange={(e) => setEditWhat(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="where">Edit Location:</Label>
                        <Input
                            name="where"
                            value={editWhere}
                            onChange={(e) => setEditWhere(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="calories">Edit Calories:</Label>
                        <Input
                            name="calories"
                            value={editCal}
                            onChange={(e) => setEditCal(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category">Edit Category:</Label>
                        <Input
                            name="category"
                            value={editCat}
                            onChange={(e) => setEditCat(e.target.value)}
                        >
                            <option></option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Snack">Snack</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="date">Edit Date:</Label>
                        <Input
                            name="date"
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="photo">Edit Image:</Label>
                        <Input
                            name="photo"
                            value={editPhoto}
                            onChange={(e) => setEditPhoto(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="feelings">Edit Mood:</Label>
                        <Input
                            name="feelings"
                            value={editFeel}
                            onChange={(e) => setEditFeel(e.target.value)}
                        />
                    </FormGroup>
                    <Button color="warning" onClick={() => {props.editUpdateLog(UpdateFood); props.updateOn()}}>Click to Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default UpdateFood;