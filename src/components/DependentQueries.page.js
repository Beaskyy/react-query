import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fectchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};
export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery([
    "user",
    email,
    () => fetchUserByEmail(email),
  ]);
  const channelId = user?.data.channelId;
  useQuery(["courses", channelId], () => fectchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });
  return <div>DependentQueriesPage</div>;
};
