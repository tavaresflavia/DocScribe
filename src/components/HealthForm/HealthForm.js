import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Input from '../Input/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultValues = {
  exameMacroscopico: [],
  achadosColposcopicosNormais: [],
  jec: '',
  ug: '',
  achadosColposcopicosVarios: [],
  achadosColposcopicosAnormais: [],
  testeDeSchiller: '',
  conclusao: []
};

const HealthForm = () => {
  const [formCurrentData, setFormCurrentData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCurrentData({
      ...formCurrentData,
      [name]: value
    });
  };

  console.log(formCurrentData)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formCurrentData);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <section className="container">
      <h1 className="text-center mb-4">Exame</h1>
      <Form onSubmit={handleSubmit}>
        {Object.keys(defaultValues).map((key) => (
          <Input
            key={key}
            controlId={key}
            label={capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1').trim())}
            name={key}
            value={ formCurrentData[key]  }
            onChange={handleChange}
            rows={2} // Rows only applicable for textarea
          />
        ))}
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default HealthForm;
