import React, {Component} from "react";
import "./card.css"



class Card extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    handleClick = (c) => {
        this.props.clickChamp(c)
    }



    render() {
        return (
            <button className={"card"} onClick={()=>this.handleClick(this.props.name)}>
                <img src={this.props.imgSrc} alt={this.props.name+".png"}/>
                <p>{this.props.name}</p>
            </button>
        );
    }
}

export default Card;