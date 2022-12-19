import React, { useEffect } from "react";
import { Button, Input, Row, Col, Form, DatePicker, Radio} from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import "../add/Add.css";
import { deleteUser,updateData } from "../../services/User";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getUsers} from "../../App/reducer"
import moment from "moment";

function Detail() {
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
const onSubmit = async (data) => {
    await updateData(`/users/${id}`,data)
    navigate('/');
}
const {id} = useParams();
const handleDeleteUser = () => {
    deleteUser(id);
    navigate('/');
}
const dispatch = useDispatch();
const details = useSelector((store) => store.Show.detail);
    useEffect(() => {
        dispatch(getUsers(id));
    },[]);
    useEffect(() => {
        console.log(moment(details.dateOfBirth).format('DD/MM/YYYY'),)
        if(details){
            reset({
                name:details.name,
                email:details.email,
                phone:details.phone,
                address:details.address,
                age:details.age,
                dateOfBirth:moment(moment(details.dateOfBirth).format('DD/MM/YYYY'),"DD/MM/YYYY"),
                gender:details.gender,
            })
        }
    },[details]);
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
                    render={({ field }) => <Input {...field} />}
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
                    render={({ field }) => <Input {...field} />}
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
                    render={({ field }) => <Input {...field} />}
                    />
                </div>
                {errors.phone && <p style={{color: 'red',marginLeft: '26%', marginTop: '5px',marginBottom: '0px'}}>{errors.phone.message}</p>}
            </div>
            <div className="address">
                <div className="from">
                    <label>Address</label>
                    <Controller
                    control={control}
                    name="address"
                    render={({ field }) => <Input {...field} />}
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
                    render={({ field }) => <Input {...field} />}
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
                    render={({ field }) => <DatePicker {...field} format='DD/MM/YYYY' />}
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
                        style={{display: 'flex', columnGap: '10px'}}
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
            <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap:'50px'}}>
                <Button htmlType="submit">Submit</Button>
                <Button onClick={handleDeleteUser}>Delete</Button>
            </div>
            
            </Form>
        </Col>
        </Row>
    </div>
    );
    }
    
    export default Detail;