import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";


const UserListPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
        api.get("/users")
        .then((response) => {
            const data = response.data;
            setUsers(data.users);
        })
    }, []);

  return (
    <div className="posts-list">
      <ol className="user-filter">
            {users.map((user) => (
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                {user.firstName} {user.lastName}
                </Link>
            </li>
            ))}
        </ol>
    </div>
  );
};
export default UserListPage;

