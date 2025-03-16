import './Dropdown.css';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {  useNavigate } from "react-router-dom";
import AppContext from '../../context/AppContext';
// import { useMediaQuery } from 'react-responsive';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logOut, currentUser } = useContext(AppContext);

  // const tablet = useMediaQuery({ query: '(max-width: 1224px)' })
  // const bigScreen = useMediaQuery({ query: '(min-width: 1225px)' });

  const dropdownRef = useRef(null);
  const navigate = useNavigate();


  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);





  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleOptionClick = (options) => {
    const { option, link } = options;
    setIsOpen(false);
    if (option === 'Sign out') {
      logOut();
      navigate("/login");
      // console.log('sign out');
      return;
    }
    navigate(`/${link}`);
  };

  const options = [
    { option: 'Home', link: '' },
    { option: 'About', link: 'about' },
    { option: 'Articles', link: 'articles' },
    { option: 'Dashboard', link: 'dashboard' },
    { option: 'Write a post', link: 'create-article' },
    { option: 'Settings', link: 'settings' },
    { option: 'Profile', link: 'profile' },
    { option: 'Sign out' }
  ];

//  const {user_img} = currentUser;

//  console.log(JSON.parse(currentUser))


  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="profile">
        <div style={{
          width: "100%",
          flex: 1
        }}></div>


        <img src={currentUser && currentUser.user_img} alt="profile picture" onClick={toggleDropdown} style={{
          borderRadius: "50%",
          justifySelf: "flex-end"
        }} />
      </div>

      {isOpen && (
        <ul className="dropdown-menu">
          <div className='profile-name'>
            <p>Authur Black</p>
            <p>@Authur Black</p>
          </div>

          <hr style={{ width: '100%', color: '#1c1c1c30' }} />
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
