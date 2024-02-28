import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomFormGroup = ({
  controlId,
  label,
  name,
  value,
  onChange
}) => {
  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Label className="mt-2">{label}</Form.Label>
        <Form.Control
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
      {typeof value === "object" && value.map((el) => <p>el</p>)}
    </div>
  );
};

export default CustomFormGroup;
