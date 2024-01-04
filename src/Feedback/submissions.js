import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Submissions() {
    const allEntries = JSON.parse(localStorage.getItem("allEntries"));
    const [displayDetail, setDisplay] = useState(false);
    const [singleEntry, setSingleEntry] = useState({ 'name': '', 'email': '', 'phone': '', 'checkbox_values': [], 'cardNumber': '' });

    useEffect(() => {
        var id, entry;
        if (!window.location.pathname.includes('submissions')) {
            setDisplay(true);
            id = window.location.pathname.split('/').pop();
            entry = allEntries.filter(item => parseInt(item['id']) === parseInt(id))[0];
            setSingleEntry(entry);
        }
    }, []);

    const handleCheckVal = (ty, entry) => {
        var val = '';

        // Check if entry and entry['checkbox_values'] are defined
        if (entry && entry['checkbox_values'] && entry['checkbox_values'].length > 0) {
            const filteredValues = entry['checkbox_values'].filter(item => item.split('_')[0] === ty);
            if (filteredValues.length > 0) {
                val = filteredValues[0].split('_')[1];
            }
        }
    

        return val;
    };

    const singleEntryForm = () => {
        return (
            <Container>
                <Card>
                    <Card.Header>
                        <cite title="Source Title">Feedback Details</cite>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>Customer Name</Col>
                            <Col>{singleEntry['name']}</Col>
                        </Row>
                        <Row>
                            <Col>Email</Col>
                            <Col>{singleEntry['email']}</Col>
                        </Row>
                        <Row>
                            <Col>Phone</Col>
                            <Col>{singleEntry['phone']}</Col>
                        </Row>
                        <Row>
                            <Col>Card Number</Col>
                            <Col>{singleEntry['cardNumber']}</Col>
                        </Row>
                        {Object.keys(feedback_type).map((ty, index) => (
                            <Row key={index}>
                                <Col>{feedback_type[ty]}</Col>
                                <Col>{handleCheckVal(ty, singleEntry)}</Col>
                            </Row>
                        ))}
                    </Card.Body>
                </Card>
            </Container>
        );
    };

    const feedback_type = {
        'qos': 'Please rate the quality of the service you received from your station',
        'qob': 'Please rate the quality of your beverage',
        'roc': 'Was our restaurant clean?',
        'exp': 'Please rate your overall dining experience',
        'eyp': 'Please rate the speed and efficiency of the police response to your reported incident. Your input helps us enhance our response times and effectiveness',
    };

    return (
        <>
            {displayDetail ?
                (singleEntryForm())
                :
                (<div className='padding30px'>
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Form Details</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Card Number</th>
                                {Object.keys(feedback_type).map((ty, index) => (<th key={index}>{feedback_type[ty]}</th>))}
                            </tr>
                        </thead>
                        <tbody>
                            {allEntries.map(entry => (
                                <tr key={entry.id}>
                                    <td><a href={`/submission/${entry['id']}`} target="_blank" rel="noopener noreferrer">View Details</a></td>
                                    <td>{entry['name']}</td>
                                    <td>{entry['email']}</td>
                                    <td>{entry['phone']}</td>
                                    <td>{entry['cardNumber']}</td>
                                    {Object.keys(feedback_type).map((ty, index) => (
                                        <td key={`${entry.id}_${ty}`}>{handleCheckVal(ty, entry)}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>)
            }
        </>
    );
}

export default Submissions;
