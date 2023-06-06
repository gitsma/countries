import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Country = ( { allCountries}) => {
    console.log(allCountries)
  return (
    <div className = "d-flex justify-content-center flew-wrap">
        {allCountries !== undefined && allCountries.length !== 0 ? 
        allCountries.map((country, index) => (
            <Card style = {{ width: '18rem', margin: '1rem'}} key={index}>
                <Card.Img variant = "top" src={country.flags.png} />
                <Card.Body>
                    <Card.Title>{country.name.common}</Card.Title>
                    <Card.Text>Capital - </Card.Text>
                    <Card.Text>Region - </Card.Text>
                    <Button variant="primary"> More info</Button>
                </Card.Body>
            </Card>
        ))
    : <h1>Duomenys nerasti</h1>
    }

    </div>
  )
}

export default Country