import axios from 'axios';
import React, { Component } from 'react'

class Followers extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        // fetch user data
        axios.get("https://api.github.com/users/cheyenne-floyd/followers")
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

export default Followers;