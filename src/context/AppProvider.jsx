import { useEffect, useState } from 'react'
import AppContext from './AppContext';
import { isTokenExpired } from "../utils/isTokenExpired"
import  axiosInstance  from "../utils/axiosInstance"
// import axios from 'axios';


// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [searched, setSearched] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [blogs, setBlogs] = useState([]);


  //check validate current user
  useEffect(() => {
    if (currentUser === null) {
      const token = localStorage.getItem("token");

      const expired = isTokenExpired(token)

      if (token && !expired) {
        const user = localStorage.getItem("user");

        if (user) {
          setCurrentUser(JSON.parse(user));
        }
      } else {
        localStorage.removeItem("user");
      }
    }

  }, [currentUser]);

  
  useEffect(() => {
    getBlogs();
  }, [])


  const getBlogs = async () => {
    try {
      const response = await axiosInstance.get("/blogs", {
        skipAuth: true,
      });
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  


  // update current user
  const updateUser = (user) => {
    setCurrentUser(user)
  }

  // logout function
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    updateUser(null);
  }





  return (
    <AppContext.Provider value={{
      searched,
      currentUser,
      blogs,
      updateUser,
      setSearched,
      logOut,
    }}
    >{children}</AppContext.Provider>
  )
}

export default AppProvider