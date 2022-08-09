import React, {Component} from "react";
import "./modal.css"

class CongratulationsModal extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.gameWon===false) {
            return null;
        }

        return (
            <div className={"modal"}>
                <div className={"modal-content-w"}>
                    <h4>You Win!!!</h4>
                    <button onClick={this.props.resetFunction}>Restart Game</button>
                </div>
            </div>
        );
    }
}

export default CongratulationsModal;