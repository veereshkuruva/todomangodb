import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Data = () => {
  const [getdata, setGetdata] = useState([]);
//   const [start, setStart] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4000/gettask")
      .then((all) => setGetdata(all.data))
      .catch(() => console.log("errr"));
  });
  const click1 = (ele) => {
    let {  name, email } = ele;
    localStorage.setItem("ID", ele._id);
    localStorage.setItem("Name", name);
    localStorage.setItem("email", email);
    
    // console.log(ele._id);
    // axios
    //   .delete(`http://localhost:5000/auth/update`, { name: ele })
    //   .then((all) => console.log("data"))
    //   .catch(() => console.log("errr"));
  };

  const click = (ele) => {
    console.log(ele);
    axios
      .delete(`http://localhost:4000/delete/${ele._id}`)
      .then((all) => console.log("datadelete"))
      .catch(() => console.log("errr"));
  };

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            
          </tr>
        </thead>
        <tbody>
          {getdata.map((ele, i) => {
            return (
              <>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  
                  <td>
                    <button onClick={() => click(ele)}>delete</button>
                  </td>
                  <td>
                    
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Data;