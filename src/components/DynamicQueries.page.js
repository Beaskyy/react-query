import axios from "axios"
import { useQueries } from "react-query"

const fetchSuperHero = ({heroId}) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`)
}

export const DynamicQueriesPage = ({heroId}) => {
  const queryResults = useQueries(heroId.map((id) => {
    return {
      queryKey: ["super-hero", id],
      queryFn: () => fetchSuperHero(id)
    }
  }))
  
  return (
    <div>DynamicQueriesPage</div>
  )
}
