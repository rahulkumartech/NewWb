import { useState } from "react";
import { allUser } from "../redux/Actions/index";
import { useDispatch } from "react-redux";
const Users = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    age: "",
    sub: ""
  });
  const { name, age, sub } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setUser({
      name: "",
      age: "",
      sub: ""
    });
    dispatch(allUser(user));
  };
  return (
    <div>
      <h3>Hello User</h3>
      <input type="text" value={name} name="name" onChange={handleChange} />
      <br />{" "}
      <input type="text" value={age} name="age" onChange={handleChange} />
      <br />
      <input type="text" value={sub} name="sub" onChange={handleChange} />
      <br />
      <br />
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default Users;
