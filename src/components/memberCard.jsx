import React from 'react'

export const MemberCard = ({ member }) => {
  const {
    age, name, activities, rating
  } = member
  return (
    <div>
      <div className=' w-[300px] bg-[#ebebeb] rounded mb-3 p-3 shadow-lg'>
        <div className='text-[12px]'>
          <div className='text-[20px]'><b>{name}</b></div>
          <div>Age: {age}</div>
          <div>Rating: {rating}</div>
          <div>Activities: {
            activities.map((activity, key) => (<span 
              key={key}
              className='mr-2 text-[12px] bg-black text-white p-1 rounded'
            >{activity}</span>))
          }</div>
        </div>
      </div>
    </div>
  )
}
