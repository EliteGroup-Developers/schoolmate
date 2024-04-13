import {Link} from 'react-router-dom'
import { useRef, useState, useEffect } from "react";
import  Nav from './Home/Nav'
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";
// import Success from './Success'
import Login from "./Login";
import "./reg-login.css";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

//inputs

const[surname,setSurname]=useState('');
console.log(surname);

const[firstName,setFirstName]=useState('');
console.log(firstName);

const[otherName ,setOtherName]=useState('');
console.log(otherName);

const[userName,setUserName]=useState('');
console.log(userName);


const[matNo,setMatNo]=useState('');
console.log(matNo);
const[department,setDepartment]=useState('');

console.log(department);

const[regNo,setRegNo]=useState('');
console.log(regNo);

const[level,setLevel]=useState('');
console.log(level);

const[email,setEmail]=useState('');
console.log(email);

const[password,setPassword]=useState('');
console.log(password);


const[faculty,setFaculty]=useState('');
console.log(faculty);

const[semester,setSemester]=useState('');

console.log(semester);



  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ surname,firstName,otherName,userName,matNo,department,regNo,level,email,password,faculty,semester }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Login />
      ) : (
        
        <section className='mih-h-screen min-w-screen'>
              {/* <Nav/> */}

          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="color">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="  flex flex-1 justify-between flex-wrap items-center  ">
              <div className="mb-10">
                    <label className="color block" htmlFor="username">
                    </label>
                        <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => console.log(e)}
                    value={surname}
                    required
                    // aria-invalid={validName ? "false" : "true"}
                    // aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    placeholder="Surname"
                    className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                    />
              </div>
              <div className="mb-10">
                    <label className="color block" htmlFor="username">
                    </label>
                        <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    placeholder="Firstname"
                    className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                    />
              </div>
              <div className="mb-10">
                    <label className="color block" htmlFor="username">
                    </label>
                        <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setOtherName(e.target.value)}
                    value={otherName}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    placeholder="Othername"
                    className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                    />
              </div>
              <div className="mb-10">
                    <label className="color block" htmlFor="username">
                    </label>
                        <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    placeholder="username"
                    className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                    />
              </div>
              {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p> */}

              <div className="mb-10">
                <label className="color block " htmlFor="password">
                </label>
                <input
                  type="text"
                  id="password"
                  onChange={(e) => setMatNo(e.target.value)}
                  value={matNo}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                  placeholder="Enter Your Matriculation number"
                />
              </div>

              {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
 */}

              <div className="mb-10">
                <label className="color block" htmlFor="confirm_pwd">
                </label>
                <input
                  type="text"
                  id="confirm_pwd"
                  onChange={(e) => setDepartment(e.target.value)}
                  value={department}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                  placeholder="Enter your department name "
                />
              </div>
              <div className="mb-10">
                <label className="color block" htmlFor="confirm_pwd">
                </label>
                <input
                  type="text"
                  id="confirm_pwd"
                  onChange={(e) => setRegNo(e.target.value)}
                  value={regNo}
                  required
                //   aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                  placeholder="Registration number "
                />
              </div>
              <div className="mb-10">
                <label className="color block" htmlFor="confirm_pwd">
                </label>
                <input
                  type="text"
                  id="confirm_pwd"
                  onChange={(e) => setLevel(e.target.value)}
                  value={level}

                  
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                  placeholder="Enter your Level "
                />
              </div>
              <div className="mb-10">
                <label className="color block" htmlFor="confirm_pwd">
                </label>
                <input
                  type="email"
                  id="confirm_pwd"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}

                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="placeholder-green-600::placeholder text-1xl  text-green-600 w-[15rem] mx-10  rounded-md  p-1"
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div className="mb-10">
                <label className="color block" htmlFor="confirm_pwd">
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}

                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                  placeholder="Enter your password "
                />
              </div>
              <div className="mb-10">
                <label className="color block" htmlFor="confirm_pwd">
                </label>
                <input
                  type="text"
                  id="confirm_pwd"
                  onChange={(e) => setFaculty(e.target.value)}
                  value={faculty}

                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                  placeholder="Enter your Faculty"
                />
              </div>
              <div className="mb-10">
                <label className="color block" htmlFor="confirm_pwd">
                </label>
                <input
                  type="text"
                  id="confirm_pwd"
                  onChange={(e) => setSemester(e.target.value)}
                  value={semester}

                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="placeholder-green-600::placeholder text-3xl  w-[15rem] mx-10 "
                  placeholder="Enter your Semester"
                />
              </div>
            </div>
            <button
              className="button  flex justify-center items-center ml-96 w-[20rem] max-lg:w-[10rem] max-lg:flex max-lg:justify-center max-lg:items-center max-lg:ml-[6rem] "
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              {/*put router link here*/}
            <Link to='/login'><a href="#">Sign In</a></Link>  
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
