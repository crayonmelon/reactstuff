import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export class ConsItem extends Component {
    getStyle = () => {
       return{
        padding: '10px',
        margin: '10px',
        backgroundColor: this.props.item.liked ===false ?
            'backgroundColor' : ' #FFC14C'    
       }
    }
    render() {

        const {id, title, author, content} = this.props.item;
        return (
            <Card style={this.getStyle()}>
            <div>
                <h3><Badge variant="dark">{title}</Badge></h3>
                <Card.Subtitle className="mb-2 text-muted">By  {author}</Card.Subtitle>
                <p>{content}</p>
                <button onClick={this.props.delItem.bind(this, id)} style = {btnStyle}>x</button>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}

            </div>
        </Card>
        )
    }
}

ConsItem.propTypes = {
    item: PropTypes.array.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '40%',
    cursor: 'pointer',
    float: 'right'
}

export default ConsItem