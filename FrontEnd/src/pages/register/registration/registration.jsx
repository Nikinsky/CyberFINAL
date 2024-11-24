import React, { useEffect, useState } from "react";
import s from "./registration.module.css";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { accesAdd, getUsers, postUser } from "../../../redux/regisSlice";
import { toast, ToastContainer } from "react-toastify";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tg, setTg] = useState("");
  const {users} = useSelector(state => state.users)
  const dispatch = useDispatch()
  const errorMesg = (message) => {
    
    toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    } );
  }


  useEffect(() => {
        dispatch(getUsers())
  }, [dispatch])
  const handleonSubmit = (e) => {
    e.preventDefault()
    const usersId = users.length ? users[users.length - 1].id + 1 : 1
    if (name.trim().length && email.trim().length && tg.trim().length) {
        const data = {
            "id": usersId,
            "name": name,
            "email": email,
            "telegram": tg
    }
        dispatch(postUser(data))
        dispatch(accesAdd())
        setName("")
        setEmail("")
        setTg("")
    } else {
        errorMesg("Заполните пустые параметры  ")
    }

  }

  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);

  return (
    <div className={s.register}>
      <div className="container-sm">
        <form onSubmit={handleonSubmit} className={s.form}>
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3cg">
              Name
            </label>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="form3Example3cg"
              className="form-control form-control-lg"
            />
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4cg">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="form3Example4cg"
              className="form-control form-control-lg"
            />
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4cdg">
              Telegram
            </label>
            <input
              onChange={(e) => setTg(e.target.value)}
              value={tg}
              type="text"
              id="form3Example4cdg"
              className="form-control form-control-lg"
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-success btn-block btn-lg bg-white px-5 py-3 text-bold fw-bold text-body"
            >
              Register
            </button>
          </div>

          <p className="text-center  text-muted mt-5 mb-0">
            By clicking the button, you consent to the processing of personal
            data and agree to the privacy policy.
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
