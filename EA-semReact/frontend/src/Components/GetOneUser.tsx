//import { Link, Navigate, useNavigate } from "react-router-dom"
import {User} from '../model/User'
import React from 'react'
import { ChangeEvent, useEffect, useState } from 'react'
import * as userService from '../Service/UserService'
import ListItem from './ListItem';
import {useNavigate } from "react-router-dom"

interface Props {
    user:User
}
type InputChange = ChangeEvent<HTMLInputElement>;

const GetOneUser: React.FC = () => {
    const navigate = useNavigate();
    
    const [users, setUsers] = useState<User[]>([]);
    const loadOneUser = async () => {
        const res = await userService.getOneUser(useState.name);
        setUsers(res.data);
    }

    useEffect(() => {
        loadOneUser();
    }, []);

    const handleInputChange = (e: InputChange) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await userService.getOneUser(users.name);
        navigate('/users');
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card card-body">
                    <h3>Get One User</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" onChange={handleInputChange} className="form-control" placeholder="Name" autoFocus />
                        </div>
                        <button className="btn btn-primary btn-block">
                            Get One User
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default GetOneUser;