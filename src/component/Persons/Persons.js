import React from 'react' ;
import Person from './Person/Person'

const persons = props => {
    let personList  ;
    if(props.showPersonDetails) {
        console.log("good");
        personList = props.persons.map((person,index)=> {
            return(<Person name={person.name} age={person.age} key = {index}></Person>);
        })
    }

   return(
   <div>
       <h3>Hai..</h3>
       {personList}
   </div>
   );
}

export default persons;