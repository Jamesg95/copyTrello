import React from 'react'
import { Col, Card, CardHeader, Button, CardBody, CardText, CardFooter } from 'reactstrap';
import CardButton from './CardButton'
import ListButton from './ListButton';
import { connect } from 'react-redux'

const mapStatetoProps = state => {
    return {
      lists: state.lists,
    }
}

function List(props) {
    return (
        <div className='mt-4 d-flex'>
            {props.lists.map((cards) => {
                return (
                    <div key={cards.id}>
                        <Col>
                            <Card style={{width: 270}}>
                                <CardHeader>
                                    <strong>{cards.title}</strong>
                                    <Button close />
                                </CardHeader>
                                {cards.cards.map((card) => {
                                    return (
                                        <CardBody key={card.id}>
                                            <div>
                                                <CardText>
                                                    {card.text}
                                                    <Button close />
                                                </CardText>
                                            </div>
                                        </CardBody>
                                    )
                                })}
                                <CardFooter>
                                    <CardButton 
                                    listId={cards.id}
                                    />
                                </CardFooter>
                            </Card>
                        </Col>
                    </div>
                )
            })}
            <ListButton />
        </div>
    )
}

export default connect(mapStatetoProps) (List);
