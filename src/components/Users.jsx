import React from "react";

const Users = ({ users }) => {
  return (
    <ul className="mx-20 my-5">
      {users.length > 0 &&
        users.map((user) => (
          <li
            key={user.login.uuid}
            className="border px-3 py-2 my-2 rounded-md flex items-center gap-2"
          >
            <img
              src={user.picture.medium}
              alt="image"
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">
                {user.name.first} {user.name.last}
              </h2>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Users;
