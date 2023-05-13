import React, { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headroom from 'react-headroom';
import {
  addScrollableSelector,
  disablePageScroll,
} from 'scroll-lock';
import { BiLogIn, } from 'react-icons/bi';
import { TbDeviceGamepad2 } from 'react-icons/tb';
import SearchBar from '../search_bar';
import Transition from '../transition';
import CusButton from '../button';
import { IGame } from '../../types/game';
import { useStyles } from './styles';
import LoginForm from 'src/components/modal/login_dialog';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { openModal } from 'src/redux_store/common/modal/modal_slice';
import { useAppDispatch } from 'src/hooks';
import { CModalIds } from 'src/constants';
import { KeyboardArrowDown, LogoutOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import '../../scss/_home.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TelegramIcon from '@mui/icons-material/Telegram';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecondNavbar from '../second_navbar';
interface Props {
  cartItems: IGame[],
  setIsCartOpen: (isCartOpen: boolean) => void,
}

const settings: {
  icon: any;
  title: string;
  path?: string;
}[] = [
    {
      icon: <PersonOutlineOutlined />,
      title: 'Tài khoản người dùng',
      path: '/thong-tin-ca-nhan',
    },
    {
      icon: <LogoutOutlined />,
      title: 'Đăng xuất',
    },
  ];

const Header = (props: Props) => {
  const classes = useStyles();
  const { cartItems, setIsCartOpen } = props;
  const [isLogin, setIsLogin] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const menuRef = useRef<HTMLImageElement>(null);
  const notifyRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const getClickOutside = (e: any) => {
      if (isMenu && e.target !== menuRef.current) {
        setIsMenu(false);
      }
      if (isNotify && e.target !== notifyRef.current) {
        setIsNotify(false);
      }
    }
    const handleCloseOnScroll = () => {
      if (isMenu) {
        setIsMenu(false);
      }
      if (isNotify) {
        setIsNotify(false);
      }
    }
    window.addEventListener('click', getClickOutside);
    window.addEventListener('scroll', handleCloseOnScroll);
    return () => {
      window.removeEventListener('click', getClickOutside);
      window.removeEventListener('scroll', handleCloseOnScroll);
    }
  }, [isMenu, isNotify]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/');
  const openCart = () => {
    setIsCartOpen(true);
    addScrollableSelector('.Items');
    disablePageScroll();
  };
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenLogin = () => {
    setIsLogin(true);
    dispatch(
      openModal({
        modalId: CModalIds.login,
        modalComponent: <LoginForm />,
      })
    );
  };
  return (
    <>
      <Headroom upTolerance={1} className={classes.headroom}>
        <Transition
          className={classes.Header}
          direction="down"
          distance={20}
        >
          <CusButton
            className={classes.Logo}
            handleClick={navigateToHome}
          >
            <TbDeviceGamepad2 style={{ color: '#fff' }} /> GameStore
          </CusButton>
          <Box sx={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center'
            marginLeft: '10px'
          }}>
            <SearchBar />
          </Box>
          {/* <CusButton
          className={classes.Cart}
          handleClick={openCart}
        >
          <RiShoppingBag2Line />
          Cart
          <Box className={classes.ButtonBox}>{cartItems.length}</Box>
        </CusButton> */}

          {isLogin ? (
            // <Box sx={{ flexGrow: 0 }}>
            //   <Tooltip title="Open settings">
            //     <IconButton
            //       onClick={handleOpenUserMenu}
            //       sx={{ p: 0, color: '#fff' }}
            //     >
            //       <Avatar
            //         alt="Remy Sharp"
            //         src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg'
            //       // src={me?.avatar || '/static/images/avatar/2.jpg'}
            //       />
            //       <Typography ml={1} fontWeight="600">
            //         {/* {me?.fullName} */}
            //         LorT
            //       </Typography>
            //       <KeyboardArrowDown />
            //     </IconButton>
            //   </Tooltip>
            //   <Menu
            //     sx={{ mt: '45px' }}
            //     id="menu-appbar"
            //     anchorEl={anchorElUser}
            //     anchorOrigin={{
            //       vertical: 'top',
            //       horizontal: 'right',
            //     }}
            //     keepMounted
            //     transformOrigin={{
            //       vertical: 'top',
            //       horizontal: 'right',
            //     }}
            //     open={Boolean(anchorElUser)}
            //     onClose={handleCloseUserMenu}
            //   >
            //     {settings.map((setting) => (
            //       <li
            //         key={setting.title}
            //         onClick={handleCloseUserMenu}
            //         onClickCapture={() => {
            //           if (setting.path) {
            //             navigate(setting.path);
            //           } else {
            //             // dispatch(logout(''));

            //             setAnchorElUser(null);
            //             setIsLogin(false);
            //           }
            //         }}
            //       >
            //         {setting.icon}
            //         <Typography textAlign="center">
            //           {setting.title}
            //         </Typography>
            //       </li>
            //     ))}
            //   </Menu>
            // </Box>
            <Box className='header-content'>
              <FavoriteIcon className='header-icon' onClick={() => {
                navigate('/account/wishlist');
              }} />
              <TelegramIcon className='header-icon' onClick={() => {
                navigate('/message');
              }} />

              <div className='user-menu-container'>
                <div className={isNotify ? "user-data active" : "user-data"} onClick={() => {
                  setIsNotify(!isNotify);
                }}>
                  <NotificationsIcon className='header-icon' ref={notifyRef} />
                  <AnimatePresence>
                    {isNotify && (
                      <motion.ul
                        initial={{ opacity: 0, y: "-50%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, y: "-50%", transition: { duration: 0.35 } }}
                        transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
                        className="user-menu"
                      >
                        {settings.map((setting) => (
                          <li
                            key={setting.title}
                            onClick={handleCloseUserMenu}
                            onClickCapture={() => {
                              if (setting.path) {
                                navigate(setting.path);
                              } else {
                                // dispatch(logout(''));

                                setAnchorElUser(null);
                                setIsLogin(false);
                              }
                            }}
                          >
                            {setting.icon}
                            <Typography textAlign="center">
                              {setting.title}
                            </Typography>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className='user-menu-container'>
                <div className={isMenu ? "user-data active" : "user-data"} onClick={() => {
                  setIsMenu(!isMenu);
                }}>
                  <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' alt="user" className='rounded-image' ref={menuRef} />
                  <AnimatePresence>
                    {isMenu && (
                      <motion.ul
                        initial={{ opacity: 0, y: "-50%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, y: "-50%", transition: { duration: 0.35 } }}
                        transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
                        className="user-menu"
                      >
                        {settings.map((setting) => (
                          <li
                            key={setting.title}
                            onClick={handleCloseUserMenu}
                            onClickCapture={() => {
                              if (setting.path) {
                                navigate(setting.path);
                              } else {
                                // dispatch(logout(''));
                                setIsLogin(false);
                              }
                            }}
                          >
                            {setting.icon}
                            <Typography textAlign="center">
                              {setting.title}
                            </Typography>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Box>

          ) : (
            <CusButton
              className={classes.Cart}
              handleClick={handleOpenLogin}
            >
              Đăng nhập <BiLogIn style={{ fontSize: '20px' }} />
            </CusButton>)}
        </Transition>
        <SecondNavbar />
      </Headroom>
    </>
  );
}

export default memo(Header);
