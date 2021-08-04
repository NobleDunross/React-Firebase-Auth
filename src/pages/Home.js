import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import Search from "../components/Search";
import Signup from "../components/Signup";

function Home() {
    return (
        <div className='home'>
            <div className='home__header'> 
                <div className='home__headerLeft'>
                    <Link to='/about'>Über TAU</Link>
                    <Link to='/TyreosVentures'>Tyreos Ventures</Link>
                </div>
                <div className='home__headerRight'>
                    {/* <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link> */}
                    {/* <AppsIcon />  */}
                    <AccountBoxSharpIcon />
                </div>
            </div>

            <div className='home__body'>
                <img src="/210425_Logo_TAU.png" alt= "TV" />
                < div className='home__inputContainer'>
                    <Search />
                </div>
                < div>
                    <Signup />
                </div>
            </div>
        </div>
    );
}

export default Home
