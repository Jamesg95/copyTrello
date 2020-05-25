import React from 'react'
import {connect} from 'react-redux'
import { Button, CardBody, CardText } from 'reactstrap';

export default connect(({cards})=>({cards}))
(function Cards(props) {
    const cards = props.cards.filter(card=>card.listId===props.listId)
    return cards.map(card => <CardBody key={card.id}>
            <div>
                <CardText>
                    {card.text}
                    <Button close />
                </CardText>
            </div>
        </CardBody>  
    )
})