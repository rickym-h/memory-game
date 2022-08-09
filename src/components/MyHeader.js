import React, {Component} from "react";
import "./MyHeader.css"

class MyHeader extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>League Memory Game</h1>
                <div className={"score-display"}>
                    <p>Highscore: {this.props.highScore}</p>
                    <p>Current Score: {this.props.currScore}</p>
                </div>
            </div>
        )
    }

}

export default MyHeader