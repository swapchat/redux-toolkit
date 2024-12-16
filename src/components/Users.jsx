import React from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/features/usersSlice";

const Users = ({ users }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="mx-2 my-2 px-2 py-2 border-spacing-1 bg-neutral-500 "
        onClick={() =>
          setTimeout(() => {
            dispatch(updateProfile());
          }, 3000)
        }
      >
        Update Profile
      </button>
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
    </>
  );
};

export default Users;
