import React from 'react'
import './Search.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MicNoneSharpIcon from '@material-ui/icons/MicNoneSharp';
import AppsIcon from "@material-ui/icons/Apps";
import { Button } from "@material-ui/core";

function Search({hideButtons = false}) {

    return (
        <form className='search'>

            {!hideButtons ? (
                < div className='search__buttons'>
                    <Button type="submit" variant="outlined">Vergleichsanalyse</Button>
                    <Button type="submit" variant="outlined">Investmentsanalyse</Button>
                    <Button type="submit" variant="outlined">Markt</Button>
                </div>
            ): (
                < div className='search__buttons'>
                    <Button className="search__buttonsHidden" variant="outlined">Vergleichsanalyse</Button>
                    <Button className="search__buttonsHidden" variant="outlined">Investitionsanalyse</Button>
                    <Button className="search__buttonsHidden" variant="outlined">Markt</Button>
                </div>
            )}
            
            < div className='search__input'>
                <SearchSharpIcon className='search__inputIcon' />
                <input placeholder="Search Tyreos Asset Univserse…" />
                <MicNoneSharpIcon />
            </div>

            {!hideButtons ? (
                < div className='search__AppsIcon'>
                    <AppsIcon />
                </div>

            ): (
                < div className='search__AppsIconHidden'>
                    <AppsIcon/>
                </div>
            )}

        </form>
    );
}

export default Search
