import React, { Component } from 'react'
import { Row, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'
import { connect } from 'react-redux'
import { addList } from '../redux/actions/ActionCreators'

const mapDispatchtoProps = {
    addList: (title) => (addList(title))
} 
class ListButton extends Component {
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
        const text = this.state.text
        this.props.addList(text)
        this.setState({
            text: ''
        })
    }

    renderAddButton = () => {
        return (
            <Row style={styles} onMouseDown={this.toggleForm} className='ml-3'>
                <div className='d-flex my-auto ml-2' >
                <FontAwesomeIcon icon={faPlus} className='pt-1' />
                    <p className='mb-0 ml-2'>Add new list</p> 
                </div>
            </Row>
        )
    }

    renderForm = () => {
        return (
            <div className='ml-3'>
                <TextareaAutosize
                    placeholder='Enter title for List...' 
                    autoFocus 
                    onBlur={this.toggleForm} 
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: 'none',
                        borderRadius: 4,
                        width: 270,
                        height: 50,
                        outline: 'none',
                        border: 'none',
                        overflow: 'hidden'
                    }}
                    />
                <Button size='sm' block className='mr-3' style={{width: 270}} color='success'
                    onMouseDown={this.handleSubmit}
                >
                    Save
                </Button>
            </div>
        )
    }
    
    render(){
        return this.state.isFormOpen ? this.renderForm() : this.renderAddButton()
    }
    
}

const styles = {
    color: 'white',
    backgroundColor: 'rgb(0,0,0,.3)',
    cursor: 'pointer',
    width: 270,
    height: 50,
    borderRadius: 4,
}

export default connect(null, mapDispatchtoProps) (ListButton)