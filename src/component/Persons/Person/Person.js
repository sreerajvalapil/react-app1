import React from 'react' ;
import Aux from '../../Auxilllary/Auxillary'

const person = (props) => {
    return (
        <Aux>
        <div>{props.name}</div>
        <div>{props.age}</div>
        </Aux>
    ) ;
}

export default person;