import React, {Component} from "react";

class MyHeader extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>League Memory Game</h1>
                <p>Highscore: {this.props.highScore}</p>
                <p>Current Score: {this.props.currScore}</p>
            </div>
        )
    }

}

export default MyHeader