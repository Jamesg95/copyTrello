import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../redux/actions/ActionCreators'
import { Row, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'

class CardButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFormOpen: false,
            text: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    toggleForm = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    }

    handleSubmit = () => {
        this.props.addCard(this.state.text, this.props.listId)
        this.setState((prev) => {
            return {
                text: ''
            }
        })
        this.toggleForm()
    }

    renderForm = () => {
        return (
            <div>
                <TextareaAutosize 
                    placeholder='Enter title for card...' 
                    autoFocus  
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: 'none',
                        borderRadius: 4,
                        width: '100%',
                        outline: 'none',
                        border: 'none',
                        overflow: 'hidden',
                    }}
                    />
                <Button outline size='sm' block className='mr-3' color='success'
                onClick={this.handleSubmit}
                >
                    Save
                    </Button>
            </div>
        )
    }

    renderAddButton = () => {
        return (
            <Row style={{cursor: 'pointer'}} onMouseDown={this.toggleForm}>
                <div className='d-flex my-auto ml-2' >
                <FontAwesomeIcon icon={faPlus} className='pt-1' />
                    <p className='mb-0 ml-2'>Add new card</p> 
                </div>
            </Row>
        )
    }
    
    render(){
        return this.state.isFormOpen ? this.renderForm() : this.renderAddButton()
    }
}

export default connect(null, {addCard}) (CardButton);