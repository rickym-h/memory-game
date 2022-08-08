import React, {Component} from "react";


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
            <div>
                <button onClick={()=>this.handleClick(this.props.name)}>
                    <p>{this.props.name}</p>
                </button>
            </div>
        );
    }
}

export default Card;