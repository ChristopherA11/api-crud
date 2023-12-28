import React from 'react'
import { Link } from 'react-router-dom'

const MobileList = ({ mobiles, handleDelete }) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Brand</th>
            <th>Price</th>
            <th>spec</th>
          </tr>
        </thead>
        <tbody>
          {mobiles.map((item) => (
            <tr key={item.id}>
              <td>{item.model}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
              <td>{item.spec}</td>
              <td>
                <span> <button onClick={() => handleDelete(item.id)}>Delete</button></span>
                <span> <Link to={`edit/${item.id}`}>Edit</Link></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default MobileList