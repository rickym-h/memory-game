import React, {Component} from "react";
import Card from "./Card";
import "./CardContainer.css"
import champImages from "../images/images"

console.log(champImages)
class CardContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    handleCLick = (champ) => {
        this.props.handleClick(champ)
    }

    shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    getTenChampionsWithSomeUnclicked = () => {
        const unclickedChamps = this.props.allChampions.filter((champ)=>{return !this.props.clickedChampions.includes(champ)});
        let returnChamps = [];
        let clonedArray;
        if (this.props.clickedChampions.length <= 5) {
            returnChamps = this.props.clickedChampions;
            // Fill with unclicked champs
            clonedArray = [...unclickedChamps]
            this.shuffle(clonedArray)
            returnChamps = returnChamps.concat(clonedArray.slice(0,10-this.props.clickedChampions.length))
        } else if (unclickedChamps.length <= 5) {
            returnChamps = unclickedChamps;
            // Fill with clicked champs
            clonedArray = [...this.props.clickedChampions]
            this.shuffle(clonedArray)
            returnChamps = returnChamps.concat(clonedArray.slice(0,10-unclickedChamps.length))
        } else {
            //Standard case, fill with 5 clicked and 5 unclicked.
            clonedArray = [...unclickedChamps]
            this.shuffle(clonedArray)
            returnChamps = returnChamps.concat(clonedArray.slice(0,5))
            clonedArray = [...this.props.clickedChampions]
            this.shuffle(clonedArray)
            returnChamps = returnChamps.concat(clonedArray.slice(0,5))
        }
        this.shuffle(returnChamps);
        return returnChamps;
    }

    render() {
        let tenChamps = this.getTenChampionsWithSomeUnclicked();
        return (
            <div className={"card-container"}>
                {tenChamps.map((c) => {
                    return (
                        <Card key={c} name={c} clickChamp={(click)=>this.handleCLick(click)}/>
                    )

                })}
            </div>
        );
    }
}

export default CardContainer