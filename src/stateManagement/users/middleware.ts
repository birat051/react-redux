import axios from "axios"
import type { Dispatch } from 'redux'
import { fetchUsersFailure, fetchUsersSuccess } from "./actions"

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

export const fetchUsers=()=>{
    return function(dispatch:Dispatch)
    {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            const usernames=response.data.map((user:User)=>user.name)
            dispatch(fetchUsersSuccess(usernames))
        }).catch((error)=>dispatch(fetchUsersFailure((error as Error).toString())))
    }
}