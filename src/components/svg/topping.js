import React, { Component } from "react";

export default class cheese extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="31.571" height="31.571" viewBox="688 206.429 31.571 31.571" {...this.props}>
                <path d="M712.293 213.707c-.642-4.117-4.213-7.278-8.507-7.278-4.295 0-7.866 3.16-8.508 7.278-4.117.642-7.278 4.213-7.278 8.507 0 4.748 3.863 8.61 8.61 8.61h2.87v5.741c0 .793.643 1.435 1.436 1.435h5.74c.792 0 1.435-.642 1.435-1.435v-5.74h2.87c4.748 0 8.61-3.863 8.61-8.61 0-4.295-3.16-7.866-7.278-8.508Zm-7.072 21.423h-2.87v-4.305h2.87v4.305Zm5.74-7.175h-1.807l2.09-3.582a1.435 1.435 0 1 0-2.48-1.447l-2.933 5.028h-.61v-4.305a1.435 1.435 0 0 0-2.87 0v4.305h-.611l-2.933-5.028a1.435 1.435 0 0 0-2.48 1.447l2.09 3.582h-1.807a5.747 5.747 0 0 1-5.74-5.74 5.747 5.747 0 0 1 5.74-5.74c.793 0 1.435-.643 1.435-1.436a5.747 5.747 0 0 1 5.74-5.74 5.747 5.747 0 0 1 5.74 5.74c0 .793.643 1.435 1.436 1.435a5.747 5.747 0 0 1 5.74 5.74 5.747 5.747 0 0 1-5.74 5.74Z" fill={this.props.color} fillRule="evenodd" data-name="XMLID_309_" />
            </svg>
        )
    }
}