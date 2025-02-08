import axios from 'axios'
import { useQuery } from 'react-query'

const fetchFriends = async () => {
  const {data} = await axios.get('http://localhost:4000/friends')
  return data
}

export const useFriendsData = () => {
  return useQuery("friends", fetchFriends)
}
