import React, {Component} from "react";
import "./card.css"
import champImages from "../images/images";



class Card extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    handleClick = (c) => {
        this.props.clickChamp(c)
    }


    removePunctuation(string) {
        let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
        return string.replace(regex, '');
    }

    render() {
        let strippedName = this.removePunctuation(this.props.name)
        console.log(strippedName)
        return (
            <button className={"card"} onClick={()=>this.handleClick(this.props.name)}>
                <img src={champImages[strippedName]} alt={strippedName}/>
                <p>{this.props.name}</p>
            </button>
        );
    }
}

export default Card;