import React, {Component} from "react";
import CardContainer from "./CardContainer";
import MyHeader from "./MyHeader";
import InfoModal from "./InfoModal";
import CongratulationsModal from "./CongratulationsModal";
import {champList} from "../champions/champ-list"
import "./game.css"


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
            lastChamp: "",
        }

    }

    clickedChamp = (champion) => {

        if (this.state.clickedChampions.includes(champion)) {
            console.log("Game Over!")
            this.setState({
                lastChamp: champion,
                gameOver: true,
            })
        } else if (this.state.clickedChampions.length === this.state.allChampions.length-1) {
            console.log("Game Won!")
            this.setState({
                gameWon: true,
                lastChamp: champion,
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
            lastChamp: "",
        })
    }

    render() {
        return (
            <div className={"game-container"}>
                <MyHeader highScore={this.state.highScore} currScore={this.state.currentScore}/>
                <CardContainer clickedChampions={this.state.clickedChampions} allChampions={this.state.allChampions} handleClick={this.clickedChamp}/>
                <InfoModal lastChamp={this.state.lastChamp} gameOver={this.state.gameOver} clickedChamps={this.state.clickedChampions} resetFunction={this.restartGame}/>
                <CongratulationsModal gameWon={this.state.gameWon} clickedChamps={this.state.clickedChampions} resetFunction={this.restartGame}/>
            </div>
        );
    }
}

export default Game