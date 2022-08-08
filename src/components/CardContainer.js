import React, {Component} from "react";
import Card from "./Card";


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
        if (this.props.clickedChampions.length <= 5) {
            returnChamps = this.props.clickedChampions;
            console.log("initial = " + returnChamps)
            // Fill with unclicked champs
            this.shuffle(unclickedChamps)
            returnChamps = returnChamps.concat(unclickedChamps.slice(0,10-this.props.clickedChampions.length))
        } else if (unclickedChamps.length <= 5) {
            returnChamps = unclickedChamps;
            // Fill with clicked champs
            this.shuffle(this.props.clickedChampions)
            returnChamps = returnChamps.concat(this.props.clickedChampions.slice(0,10-unclickedChamps.length))
        } else {
            //Standard case, fill with 5 clicked and 5 unclicked.
            this.shuffle(unclickedChamps)
            returnChamps = returnChamps.concat(unclickedChamps.slice(0,5))
            this.shuffle(this.props.clickedChampions)
            returnChamps = returnChamps.concat(this.props.clickedChampions.slice(0,5))
        }
        this.shuffle(returnChamps);
        return returnChamps;
    }

    render() {
        let tenChamps = this.getTenChampionsWithSomeUnclicked();
        return (
            <div>
                This is the CardContainer component
                {tenChamps.map((c) => {
                    return (
                        <div key={c}>
                            <Card name={c} clickChamp={(click)=>this.handleCLick(click)}/>
                        </div>
                    )

                })}
            </div>
        );
    }
}

export default CardContainer