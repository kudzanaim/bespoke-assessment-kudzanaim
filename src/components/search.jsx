import React, { useContext, useState } from 'react'
import AppContext from '../context'
import { useFetchMembers } from '../hooks'

export const SearchModal = () => {
  const { setMembers } = useContext(AppContext)
  const { searchMembers } = useFetchMembers(setMembers)

  const searchHandler = () => {
    const val = document.querySelector('#search_bar')
    searchMembers('name', val.value)
  } 

  const activityTypeHandler = () => {
    const val = document.querySelector('#activityOtions')
    searchMembers('activities', val.value)
  }

  return (
    <div className='mb-4'>

      <div className='border border-gray-200 w-[520px] flex p-2 rounded-lg'>
        <div className='mr-[20px] p-[10px]'>
          <input 
            style={{outline: 'none'}}
            id='search_bar' 
            className='w-[400px]' 
            placeholder='Search member by name'
          />
        </div>
        <div>
          <button 
            className='bg-[black] p-3 text-white rounded text-[15px]' 
            onClick={searchHandler}
          >Search</button>
        </div>
      </div>

      

      <div className='flex mt-5'>
        <div>Filter By Activity</div>
        <div className='ml-2 relative top-[-5px]'>
          <select id='activityOtions' 
            className='border border-gray-200 p-[5px]' 
            onChange={activityTypeHandler}
          >
            <option value="">Any</option>
            <option value="hiking">Hiking</option>
            <option value="biking">Biking</option>
            <option value="running">Running</option>
          </select>
        </div>
      </div>

    </div>
  )
}
