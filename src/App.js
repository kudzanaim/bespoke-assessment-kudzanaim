import { useContext, useEffect } from "react"
import { MembersSection } from "./components/memberSection";
import { SearchModal } from "./components/search";
import AppContext from "./context";
import { useFetchMembers } from "./hooks";


const App = () => {
  const { setMembers } = useContext(AppContext)
  const { fetchAllMembers } = useFetchMembers(setMembers)
 
  useEffect(fetchAllMembers, [])

  return (
      <div className='p-[50px]'>
        <SearchModal />
        <MembersSection />
      </div>
  )
}

export default App
