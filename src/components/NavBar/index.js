import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
// import SearchBox from '../SearchBox'
import Button from '@material-ui/core/Button';


const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Bright Building</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            {/*<SearchBox searchIndex={data.siteSearchIndex.index} />*/}
            <Link className='navbar-item' to='/about'>
              About
            </Link>
            <Link className='navbar-item' to='/product'>
              Product
            </Link>
            <Link className='navbar-item' to='/contact'>
              Contact
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  {/*
                  <Link
                    className='button is-primary is-outlined'
                    to='https://www.brightbuilding.app/'>
                    Sign In
                  </Link>
                  */}

                  <Button href='https://www.brightbuilding.app/' color="primary" variant="outlined">
                    Sign In
                </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
