import axios from "axios";
import { useState } from "react";

const ChildA = () => {
  const [name, setName] = useState({
    firstname: "",
    lastname: ""
  });

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);

    try {
      const sendData = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        name
      );
      console.log("API", sendData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "https://jsonplaceholder.typicode.com/todos/1",
        name
      );
      console.log("UPDATE", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const resDelete = await axios.delete(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log("DELETE", resDelete.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <label>Firstname : </label>
        <input
          type="text"
          name="firstname"
          value={name.firstname}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Last Name : </label>
        <input
          type="text"
          value={name.lastname}
          name="lastname"
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Add</button>
        <br />
        <br />
        <button onClick={handleUpdate}>UPDATE</button>
        <br />
        <br />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default ChildA;
