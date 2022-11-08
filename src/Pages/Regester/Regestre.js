import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const Regestre = () => {
  const { regester } = useContext(AuthContext);
  const handalRegesterRorm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.first.value}` + `${form.last.value}`;
    const img = form.imgurl.value;
    const email = form.email.value;
    const password = form.password.value;
    regester(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
    console.log(name, img, email, password);
  };
  return (
    <div>
      <div className="w-full w-11/12 md:w-5/12 mx-auto p-8 space-y-3 rounded-xl  text-black">
        <h1 className="text-3xl font-bold text-center">Regester</h1>
        <form
          onSubmit={handalRegesterRorm}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-800">
              Fast Name
            </label>
            <input
              type="text"
              name="first"
              placeholder="Fast Name"
              required
              className="w-full px-4 py-3 rounded-md border-gray-800  text-gray-800 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-800">
              last Name
            </label>
            <input
              type="text"
              name="last"
              placeholder="last Name"
              required
              className="w-full px-4 py-3 rounded-md border-gray-800  text-gray-800 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-800">
              Photo URL
            </label>
            <input
              type="text"
              name="imgurl"
              placeholder=" Photo URL"
              required
              className="w-full px-4 py-3 rounded-md border-gray-800  text-gray-800 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-md border-gray-800  text-gray-800 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-800">
              Password
            </label>
            <input
              type="Password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-md border-gray-800  text-gray-800 "
            />
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-gray-900 bg-red-400 hover:bg-red-500"
          >
            Regester
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-700">
          Alrady have an account?
          <Link to="/login" className="underline text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regestre;
