import axios from "axios";
import { useState } from "react";
import Minhader from "./MinComp/MinHader";
import Newarrivals from "./MinComp/NewArrivals";
const Contact = () => {
  const [errMess, setErrMess] = useState("");
  const [users, setUsers] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { name, email, subject, message } = users;

  const handlerChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("name", name);
    axios.post(
      `https://sheet.best/api/sheets/62187edf-bdcb-4cc2-97ae-a4f3b857cde8`,
      { name, email, subject, message }
    );
    if (checkValidat()) {
      setUsers({ name: "", email: "", subject: "", message: "" });
      setErrMess("Message has been success...");
    } else {
      // console.log("Message faild");
    }
  };
  const checkValidat = () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    setErrMess("");
    if (name === "") {
      setErrMess("Enter the name");
      return false;
    } else if (!regex.test(email)) {
      setErrMess("Enter the Valid");
      return false;
    } else if (subject === "") {
      setErrMess("Enter the subject");
      return false;
    } else if (message === "") {
      setErrMess("Enter the message");
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="contact">
      <Minhader name={"Contact Us"} />
      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    required=""
                    value={name}
                    onChange={handlerChange}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    required=""
                    value={email}
                    onChange={handlerChange}
                  />
                  <input
                    type="text"
                    placeholder="Enter subject"
                    name="subject"
                    required=""
                    value={subject}
                    onChange={handlerChange}
                  />
                  <textarea
                    placeholder="Enter your message"
                    required=""
                    name="message"
                    value={message}
                    onChange={handlerChange}
                  ></textarea>
                  <input type="submit" onClick={submitHandler} value="Submit" />
                  <div>{errMess}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newarrivals />
    </div>
  );
};

export default Contact;
