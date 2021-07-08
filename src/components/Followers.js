import axios from 'axios';
import React, { Component } from 'react'

class Followers extends Component {
    state = {
        followers: []
    }

    componentDidMount() {
        // fetch user data
        axios.get("https://api.github.com/users/cheyenne-floyd/followers")
        .then((res) => {
            this.setState({
                Followers: res.data,
            });
        })
        .catch((err) => console.log(err));
    }
    render() {
        if (this.state.followers.length === 0) return <p> Wheres the follows?!</p>
        return (<div>
            {this.state.follower.map((follower) => (
            <div key={this.state.follower.id} >
            <h4>{this.state.follower.login}</h4>
        </div>
            ))}
            </div>);
}
}

export default Followers;