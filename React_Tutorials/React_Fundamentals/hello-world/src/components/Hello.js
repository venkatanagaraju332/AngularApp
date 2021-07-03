
import React from 'react'

const Raju = () => {
   return (
      <div>
         <h1>Hellow Raju</h1>
         <h1>Hellow Raju</h1>
      </div>
   )
}
const Hello = (props) => {
   return (
      <div>
         <h1>Hello {props.name}</h1>
      </div>
   )
   // return React.createElement(
   // 'div',
   // {id: 'hello', className: 'dummyClass'},
   // React.createElement('h1', null, 'Hello Vishwas')
   // )
}
export default Hello