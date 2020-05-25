import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import ListButton from './ListButton';

export default connect(({lists})=>({lists}))
(function Board(props) {
    return <div className='mt-4 d-flex'>
        {props.lists.map(list=><List 
            key={list.id} 
            listId={list.id} 
            title={list.title}/>)}
        <ListButton />
    </div>
})
