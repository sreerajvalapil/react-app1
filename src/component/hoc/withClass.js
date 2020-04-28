import React from 'react' ;

const withClass = (WrappComponent,className) => {
    return props => {
        return(<div className ={className}>
            <WrappComponent></WrappComponent>
        </div>)
    }
}

export default withClass;