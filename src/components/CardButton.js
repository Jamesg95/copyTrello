import React, { Component } from 'react'
import { Row, Button, CardBody } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'
import { connect } from 'react-redux'
import { addCard } from '../redux/actions/ActionCreators'


const mapDispatchtoProps = {
    addCard: (text, listId) => (addCard(text, listId))
}

const mapStatetoProps = state => {
    return {
      list: state.cards,
    }
}


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

    toggleForm = (e) => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
        e.preventDefault()
    }

    handleSubmit = () => {
        console.log(this.props)
        this.setState((prev) => {
            this.props.addCard(prev.text, this.props.listId)
            return {
                text: ''
            }
        })

    }

    renderForm = () => {
        return (
            <div>
                <TextareaAutosize 
                    placeholder='Enter title for card...' 
                    autoFocus  
                    onBlur={this.toggleForm}
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
                onMouseDown={this.handleSubmit}
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

export default connect(mapStatetoProps, mapDispatchtoProps) (CardButton);