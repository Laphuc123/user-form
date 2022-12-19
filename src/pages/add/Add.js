import React from "react";
import { Button, Input, Row, Col, Form, DatePicker, Radio } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import "./Add.css";
import { pushData } from "../../services/User";
import { useNavigate } from "react-router-dom";

function Add() {
    const navigate = useNavigate()
const schema = yup
.object({
    email: yup.string().email().required().matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,"valid required"),
    name: yup.string().required(),
    phone: yup.string().required().matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,"valid required"),
    age: yup.number().positive().integer().required(),
    address: yup.string().required(),
    dateOfBirth: yup.date().required(),
    gender: yup.string().required(),
})
.required();
const {
handleSubmit,
reset,
formState: { errors },
control,
} = useForm({
mode: "onSubmit",
reValidateMode: "onSubmit",
resolver: yupResolver(schema),
});
console.log(errors)
const onSubmit = (data) => {
    pushData("users",data);
    console.log(data);
    reset({});
    navigate('/');
}
return (
<div className="App">
    <Row>
    <Col span={12} offset={6}>
        <Form onFinish={handleSubmit(onSubmit)}>
        <div className="name">
            <div className="from">
                <label>Name</label>
                <Controller
                control={control}
                name="name"
                render={({ field }) => <Input {...field} placeholder="Enter your name"/>}
                />
            </div>
            {errors.name && <p style={{color: 'red',marginLeft: '26%', marginTop: '5px',marginBottom: '0px'}}>{errors.name.message}</p>}
        </div>
        <div className="email">
            <div className="from">
                <label>Email</label>
                <Controller
                control={control}
                name="email"
                render={({ field }) => <Input {...field} placeholder="Email address"/>}
                />
            </div>
            {errors.email && <p style={{color: 'red',marginLeft: '26%', marginTop: '5px',marginBottom: '0px'}}>{errors.email.message}</p>}
        </div>
        <div className="phone">
            <div className="from">
                <label>Phone</label>
                <Controller
                control={control}
                name="phone"
                render={({ field }) => <Input {...field} placeholder="phone number"/>}
                />
            </div>
            {errors.phone && <p style={{color: 'red',marginLeft: '26%', marginTop: '5px',marginBottom: '0px'}}>{errors.phone.message}</p>}
        </div>
        <div className="address">
            <div className="from">
                <label>address</label>
                <Controller
                control={control}
                name="address"
                render={({ field }) => <Input {...field} placeholder="Address"/>}
                />
            </div>
            {errors.address && <p style={{color: 'red',marginLeft: '26%', marginTop: '5px',marginBottom: '0px'}}>{errors.address.message}</p>}
        </div>
        <div className="age">
            <div className="from">
                <label>Age</label>
                <Controller
                control={control}
                name="age"
                render={({ field }) => <Input {...field} placeholder="Age"/>}
                />
            </div>
            {errors.age && <p style={{color: 'red',marginLeft: '26%', marginTop: '5px',marginBottom: '0px'}}>{errors.age.message}</p>}
        </div>
        <div className="date-input">
            <div className="from1">
                <label>Date Of Birth</label>
                <Controller
                control={control}
                name="dateOfBirth"
                render={({ field }) => <DatePicker {...field} />}
                />
            </div>
            {errors.dateOfBirth && <p style={{color: 'red',marginLeft: '26%', marginTop: '5px',marginBottom: '0px'}}>{errors.dateOfBirth.message}</p>}
        </div>
        <div className="gender-radio">
            <div className="from1">
                <label>Gender</label>
                <br></br>
                <Controller
                name="gender"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <Radio.Group
                    style={{display: 'flex', columnGap: '10px'} }
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    >
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                    <Radio value="Other">Other</Radio>
                    </Radio.Group>
                )}
                />
            </div>
            {errors.gender && <p style={{color: 'red',marginLeft: '26%', marginTop: '5px',marginBottom: '0px'}}>{errors.gender.message}</p>}
        </div>
        <Button htmlType="submit">Submit</Button>
        </Form>
    </Col>
    </Row>
</div>
);
}

export default Add;