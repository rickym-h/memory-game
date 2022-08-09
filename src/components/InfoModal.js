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

        let clickedChampList = [...this.props.clickedChamps]

        let lastIndex = clickedChampList.length-1;

        let index = clickedChampList.findIndex((c)=>{
            return c === clickedChampList[lastIndex]
        })

        clickedChampList[index] = clickedChampList[index].toUpperCase();
        clickedChampList[lastIndex] = clickedChampList[lastIndex].toUpperCase();

        let championsString = clickedChampList.join(" -> ")

        return (
            <div className={"modal"}>
                <div className={"modal-content-l"}>
                    <h4>Game Over!</h4>
                    <p>Clicked Champions: {championsString}</p>
                    <button className={"restartButton"} onClick={this.props.resetFunction}>Restart Game</button>
                </div>
            </div>
        );
    }
}

export default InfoModal;