import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Table from "./Components/Table";
import Form from "./Components/Form";
const serverlink = import.meta.env.VITE_SERVER_LINK;

function App() {
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState({
    id: "",
    avatarname: "",
    performancescore: "",
  });
  useEffect(() => {
    axios
      .get(serverlink + "/getData")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  const getData = () => {
    axios
      .get(serverlink + "/getData")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await axios.post(serverlink + "/addData", newData);
    setNewData({
      id: "",
      avatarname: "",
      performancescore: "",
    });
    getData();
  };
  const changeHandler = (e) => {
    setNewData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="tablecontainer">
        <Form
          submitHandler={submitHandler}
          newData={newData}
          changeHandler={changeHandler}
        />
        <Table data={data} />
        <button onClick={getData} className="syncbtn">
          Sync
        </button>
      </div>
    </>
  );
}

export default App;
