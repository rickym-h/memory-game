import React, {Component} from "react";
import "./modal.css"

class InfoModal extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.gameOver===false) {
            return null;
        }

        return (
            <div className={"modal"}>
                <div className={"modal-content-l"}>
                    <h4>Game Over!</h4>
                    <p>Clicked Champions: {this.props.clickedChamps}</p>
                    <button onClick={this.props.resetFunction}>Restart Game</button>
                </div>
            </div>
        );
    }
}

export default InfoModal;