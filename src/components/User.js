    import axios from 'axios';
    import React, { Component } from 'react'

    class User extends Component {
        state = {
            user: null
        }

        componentDidMount() {
            // fetch user data
            axios.get("https://api.github.com/users/cheyenne-floyd")
            .then((res) => {
                this.setState({
                    user: res.data,
                });
            })
            .catch((err) => console.log(err));
        }
        render() {
            if (!this.state.user) return <p>Dont rush me. Im loading ok..</p>;
            return (
                <div>
                    <img style={{ width:"250px" }} src={this.state.user.avatar_url} alt={this.state.user.name} />
                <h3>{this.state.user.name}</h3>
                </div>
            )
        }
    }

    export default User;