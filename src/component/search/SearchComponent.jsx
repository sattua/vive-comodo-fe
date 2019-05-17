import React, { Component } from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import Publication from '../publication/Publication';

import './SearchComponentStyle.css';

class SearchComponent extends Component {
    render() {
        const pubs = [<Publication id={0} title="Test 1" images={[]}/>,<Publication id={1} title="Test 2" images={[]}/>];
        return (
            <div className="search-component">
                <div className="search-field">
                    <InputBase
                        placeholder="Search…"
                        className="search-input-field"
                    />
                    <div className="search-field-icon">
                        <SearchIcon />
                    </div>
                </div>

                <div className="search-results">
                    {pubs}
                </div>
            </div>
        );
    }
}

export default SearchComponent;
