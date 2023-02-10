import React, { useContext } from 'react'
import AppContext from '../context'
import { MemberCard } from './memberCard'

export const MembersSection = () => {
  const { members } = useContext(AppContext)
  return (
    <div className="mt-5">
      <b className="underline text-[20px]">Members List ({members.length} Members)</b>
      <div className="py-3">
        {members.map((member, key) => (
          <MemberCard key={`${key}-member`} member={member} />
        ))}
      </div>
    </div>
  )
}
