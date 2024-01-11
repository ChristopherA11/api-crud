import React from 'react'
import { Link } from 'react-router-dom'
import { deleteMobile } from '../mobiles/mobileActions'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'


const MobileList = ({ mobiles }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteMobile(id))
  }

  return (
    <div>
      {/* isEmpty  use in lodash */}
      {!_.isEmpty(mobiles) ? (
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
            {/* map function use to ladash method */}
            {_.map(mobiles, (item) => (
              <tr key={item.id}>
                <td>{item.model}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.spec}</td>
                <td>
                  <span> <button onClick={() => handleDelete(item.id)}>Delete</button></span>
                  <span> <Link to={`edit/${item.id}`}><button>Edit
                  </button></Link></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>) : (
        <h3>List is Empty</h3>
      )}
    </div>
  )
}


export default MobileList