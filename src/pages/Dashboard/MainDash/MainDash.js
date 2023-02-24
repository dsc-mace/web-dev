import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import './MainDash.css'

const data = [
    { name: "Demo", age: 19, gender: "Male" },
    { name: "Demo", age: 19, gender: "Female" },
    { name: "Demo", age: 25, gender: "Male"},
  ]
function MainDash() {
  return (
    <div className='align'>
      <Sidebar/>
    <div className="dashboard-child" >
 
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>User 1</td>
              <td>User 2</td>
              <td>User 3</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Sample 1</td>
              <td>Sample 2</td>
              <td>Sample 3</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Test 1</td>
              <td>Test 2</td>
              <td>Test 3</td>
            </tr>
          </tbody>
        </table>
    </div>

    
        {/* <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
    </div>
      ); */}
  
  
    </div>
  )
}

export default MainDash