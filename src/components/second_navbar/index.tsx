import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

import '../../scss/_home.scss';
import { ControlledMenu, MenuItem, SubMenu, useHover, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const settings: {
  title: string;
  path?: string;
}[] = [
    {
      title: 'Tài khoản người dùng',
      path: '/thong-tin-ca-nhan',
    },
    {
      title: 'Đăng xuất',
    },
  ];

const SecondNavbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  return (
    <div className={classes.SecondNavbar}>
      <div className={classes.NavbarContainer} >
        <div className={classes.LeftNav}>
          <div className={classes.LinkButton} >
            <a className={classes.NavLink}
              ref={ref} {...anchorProps}
            >
              Discover
              <div className={classes.Arrow}>
              </div>
            </a>
            <ControlledMenu
              {...hoverProps}
              {...menuState}
              anchorRef={ref}
              onClose={() => toggle(false)}
            >
              <MenuItem>Cut</MenuItem>
              <MenuItem>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
              <SubMenu label="Find" onClick={() => {
                navigate('/');
              }}>
                <MenuItem>Find...</MenuItem>
                <MenuItem>Find Next</MenuItem>
                <MenuItem>Find Previous</MenuItem>
              </SubMenu>
            </ControlledMenu>
          </div>

          <div className={classes.LinkButton}>
            <a className={classes.NavLink}>
              Categories<div className={classes.Arrow}>
              </div>
            </a>
          </div>
          <div className={classes.LinkButton}>
            <a className={classes.NavLink} href="/bundles">
              Bundles<div className={classes.Arrow}>
              </div>
            </a>
          </div>
          <a className={classes.NavLink} href="/upcoming-games">
            Upcoming Games</a>
          <a className={classes.NavLink} href="/new-releases">
            New Releases</a>
        </div>
        <div className={classes.LeftNav}>
          <a href="https://support.fanatical.com/hc" target="_blank" rel="noopener noreferrer" className={classes.NavLink}>
            Support</a>
          <a className={classes.NavLink} href="/blog">
            Blog</a>
          <a className={classes.NavLink} href="/community">
            Community</a>
        </div>
      </div>
    </div>
  );
}

export default SecondNavbar;
