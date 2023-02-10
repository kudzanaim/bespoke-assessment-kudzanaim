import { MockMembers } from "./components/mockMembers"

export const useFetchMembers = (setMembers) => {

  const fetchAllMembers = () => setMembers(MockMembers)

  const searchMembers = async (filterType, query) => {
    const members = query ? 
      MockMembers.filter(member => member[filterType].includes(query)) 
      : MockMembers
    setMembers(members)
  }
  return { fetchAllMembers, searchMembers }
}