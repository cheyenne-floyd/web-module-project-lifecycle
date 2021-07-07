import axios from 'axios';
import React, { Component } from 'react'

class User extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        // fetch user data
        axios.get("https://api.github.com/users/cheyenne-floyd")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default User;