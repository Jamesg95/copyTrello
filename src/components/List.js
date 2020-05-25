import React from 'react'
import { connect } from 'react-redux'
import { Col, Card, CardHeader, Button, CardFooter } from 'reactstrap';
import CardButton from './CardButton'
import Cards from './Cards'

export default connect(({cards})=>({cards}))
(function List(props) {
    return (
        <div key={props.listId}>
            <Col>
                <Card style={{width: 270}}>
                    <CardHeader>
                        <strong>{props.title}</strong>
                        <Button close />
                    </CardHeader>
                    <Cards listId={props.listId}/>
                    <CardFooter>
                        <CardButton listId={props.listId}/>
                    </CardFooter>
                </Card>
            </Col>
        </div>
    )
})