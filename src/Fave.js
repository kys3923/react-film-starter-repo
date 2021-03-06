import React, { Component } from 'react'

class Fave extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFave: false
        }
    }

    handleClick = (e) => {
        e.stopPropagation()
        this.setState({isFave: !this.state.isFave})
        console.log('fave clicked')
    }


    render() {
        return (
            <div className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`} onClick={this.handleClick}>
                <p className="material-icons">{this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
            </div>
        )
    }
}

export default Fave