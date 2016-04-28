/**
 * Created by reharik on 4/9/16.
 */
import { Grid } from 'react-redux-grid'
import {plugins, pageSize, height} from './../utilities/gridDef.js'
import React from 'react'
import CellLink from './GridElements/CellLink.js'
import EmailLink from './GridElements/EmailLink.js'

const data = [
    {
        name: 'Michael Jordan',
        position: 'Shooting Guard'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    }
];

const columns = [
    {
        name: 'Name',
        dataIndex: 'name',
        width: '10%',
        className: 'additional-class',
        renderer: function(x){
            return x;
        }
    },
    {
        name: 'Position',
        dataIndex: 'position',
        width: '35%',
        className: 'additional-class',
        renderer: function(x){
            return x;
        }
    }
];

//var myPlugins = { CUSTOMER_MANANGER, LOADER, SELECTION_MODEL, ERROR_HANDELR, BULK_ACTION} = plugins;

const gridData = {
    columns,
    plugins,
    data
};

const grid =  (props, {store}) => {
    gridData.store = store;
    return (
        <div id='trainerList'>
            <div className="content-header">
                <input className="search" style={{color: "rgb(204, 204, 204)"}} />
                <button id="new" className="new" title="New"></button>
                <button className="delete" title="Delete these items"></button>
                <button style={{display:"none"}} className="return" title="Return"></button>

                <span className="title-name">Trainers</span>
                <img className="clear-search" src="images/clear-search.png" />
            </div>
            <div className="form-scroll-inner" style={{height: "791px"}}>
                <div id="contentArea" className="content-inner">
                    <Grid { ...gridData } />
                </div>
            </div>
        </div>);
};


grid.contextTypes = {
    store: React.PropTypes.object
};

export default grid;