import React, {Component} from "react";
import CardContainer from "./CardContainer";
import MyHeader from "./MyHeader";
import InfoModal from "./InfoModal";
import CongratulationsModal from "./CongratulationsModal";
import champList from "../champions/champ-list"


class Game extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            highScore: 0,
            currentScore: 0,
            clickedChampions: [],
            allChampions: champList,
            gameOver: false,
            gameWon: false,
        }

    }

    clickedChamp = (champion) => {

        if (this.state.clickedChampions.includes(champion)) {
            console.log("Game Over!")
            this.setState({
                gameOver: true,
            })
        } else if (this.state.clickedChampions.length === this.state.allChampions.length-1) {
            console.log("Game Won!")
            this.setState({
                gameWon: true,
                clickedChampions: this.state.clickedChampions.concat(champion),
                currentScore: this.state.currentScore+1,
            })
        } else {
            this.setState({
                clickedChampions: this.state.clickedChampions.concat(champion),
                currentScore: this.state.currentScore+1,
            })
        }
    }

    restartGame = () => {
        console.log("resetting game")
        this.setState({
            highScore: Math.max(this.state.currentScore, this.state.highScore),
            currentScore: 0,
            clickedChampions: [],
            gameOver: false,
            gameWon: false,
        })
    }

    render() {
        return (
            <div>
                <MyHeader highScore={this.state.highScore} currScore={this.state.currentScore}/>
                <CardContainer clickedChampions={this.state.clickedChampions} allChampions={this.state.allChampions} handleClick={this.clickedChamp}/>
                <InfoModal gameOver={this.state.gameOver} resetFunction={this.restartGame}/>
                <CongratulationsModal gameWon={this.state.gameWon} resetFunction={this.restartGame}/>
            </div>
        );
    }
}

export default Game