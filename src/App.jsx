import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "./components/Users";
import { getUsers } from "./redux/features/usersSlice";

const App = () => {
  const {
    data: users,
    isLoading,
    errorMsg,
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUsers({
        results: 10,
        nat: "us",
        gender: "male",
      })
    );
  }, []);
  return (
    <>
      {isLoading && (
        <p className="text-3xl tracking-wide text-center">Loading...</p>
      )}
      {errorMsg && (
        <p className="text-xl tracking-wide text-center text-red-500">
          {errorMsg}
        </p>
      )}
      <Users users={users} />
    </>
  );
};

export default App;
