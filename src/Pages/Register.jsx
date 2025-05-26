import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { createUser, signInGoogle, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, restFormData);

    createUser(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        setUser(user);
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("https://plantserver.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Register successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed: " + error.message);
      });
  };

  const handleGoogleLogIn = () => {
    signInGoogle()
      .then((result) => {
        console.log(result);
        const user = result.user;
        setUser(user);
        const userProfile = {
          email: result.user?.email,
          photoURL: result.user?.photoURL,
          name: result.user?.displayName,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("https://plantserver.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            navigate("/");
          });
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="relative min-h-screen -mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/p6L4kF3W/0eec91f7-f961-4f7c-a1fe-bac53dd90f57.png")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        <div className="relative z-20 flex items-start justify-start pt-24 md:px-8 px-4">
          <div className="card bg-gray-900/20 backdrop:backdrop-blur-3xl w-full max-w-lg md:p-9 shadow-2xl space-y-7 flex lg:ml-80 md:ml-25  md:mt-30">
            <div className="card-body">
              <h1 className="md:text-5xl text-3xl font-bold mb-6">
                Register now!
              </h1>
              <form onSubmit={handleRegister} className="fieldset">
                {/* name  */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-lg w-full"
                />
                {/* PhotoUrl  */}
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="PhotoUrl"
                  required
                  className="input input-lg w-full my-3"
                />
                {/* email  */}
                <label className="input input-lg validator w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="mail@site.com"
                    required
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>

                {/* password */}
                <label className="input input-lg validator w-full mt-4">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    className=" "
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 md:py-3 py-2 md:px-5 px-3 font-dm text-base font-medium text-white shadow-xl shadow-green-400/30 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                >
                  CREATE ACCOUNT
                </button>
                <ToastContainer />

                <h1 className="my-5 text-xl text-center">Or sign up with</h1>

                <button
                  onClick={handleGoogleLogIn}
                  type="button"
                  className="btn btn-secondary btn-outline"
                >
                  <FcGoogle size={20} /> Login with google
                </button>

                <p className="font-semibold mt-2 text-lg">
                  Dont’t Have An Account ?{" "}
                  <Link className="text-blue-500" to={"/auth/login"}>
                    login
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
