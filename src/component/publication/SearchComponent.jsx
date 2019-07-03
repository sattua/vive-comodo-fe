import React, { Component } from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import Publication from './Publication';

import './SearchComponentStyle.css';

class SearchComponent extends Component {
    render() {
        const { publications } = this.props;
        let pubs = [];
        if (publications) {
            pubs = publications.map((p) => {
                return <Publication id={p.id} title={p.title} images={[]} description={''} renderSize={'card'} />;
            });
        }
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
                    <Grid container={12} xl={12} md={12} justify={'left'} alignContent={'left'}>
                        {pubs}
                    </Grid>
                </div>
            </div>
        );
    }
}

export default SearchComponent;
