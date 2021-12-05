import React, { useEffect, useRef, useState } from "react";

import Map from '../Map/Map';
import MapService, { MAPBOX_ACCESS_TOKEN } from '../Map/MapService';
import Overlay from "../Overlay/Overlay";
import './Layout.css';

export default function Layout() {

    const mapService = useRef(null);

    let [ invisibility, setInvisibility ] = useState('');

    let overlayMonitor = e => {
        // console.log(e);
        if(!invisibility){
            setInvisibility('Hide')
        }else
            setInvisibility('');
    };

    useEffect(() => {
        //initialize only once
        if (mapService.current) {
            return;
        }
        //mapservice set to hook which is map object
        const mapObj = new MapService();
        mapObj.initMap();
        mapService.current = mapObj;
        console.log('has been rendered');
    }, []);

    // //function defination of the bounded box drawn by user
    function getBoundingBox() {
        const bbox = mapService.current.getdrawnBoundingBox();
        if (!bbox) {
            return;
        }
        console.log('Drawn bbox:', bbox)
        alert('Drawn bbox coordinatessssssssssssssssssssssss: ' + JSON.stringify(bbox.geometry.coordinates));
    }

    return (
        <div className='layout'>
            <Overlay invisibility={invisibility} setInvisibility={overlayMonitor} />
            <div className='layout__content_cont'>
                <div>
                    <p>Instructions:</p>
                    <button onClick={(e)=>overlayMonitor(e)}>Upload</button>
                    <ol>
                        <li>Use tool on the top right corner of the map to draw or delete bounding box</li>
                        <li>
                            Check "Map" component to understand how to use the helper class and methods. Provided
                            helpers should be enough to meet the requirements, so you don't have to deal with map
                            library
                        </li>
                        <li>
                            "MapService" is a helper class which takes care of initializing and other map
                            relates operations. It contains some private and public methods, you are supposed
                            to use public methods.
                        </li>
                        <li>Refer mapbox documentation if required -
                            <a target='_blank' rel="noreferrer" href='https://docs.mapbox.com/mapbox-gl-js/api/map/'> mapbox-gl</a>
                        </li>
                        <li>Refer mapbox draw tool documentation if required -
                            <a target='_blank' rel="noreferrer" href='https://github.com/mapbox/mapbox-gl-draw/blob/main/docs/API.md'> mapbox-gl-draw</a>
                        </li>
                        <li>Remove or comment example/demo codes</li>
                    </ol>
                </div>

                <div>
                    <p>Draw a bounding box on map then click - &nbsp;</p>
                    <button onClick={getBoundingBox}>
                        Get bounding box coordinate
                    </button>
                    <p>Note: Check console for full object</p>
                </div>

            </div>

            <div className='layout__map_cont'>
                {MAPBOX_ACCESS_TOKEN && <Map />}
            </div>

        </div>
    );
};
