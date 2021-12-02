import React, { useEffect, useRef } from "react";

import Map from '../Map/Map';
import MapService, { MAPBOX_ACCESS_TOKEN } from '../Map/MapService';

import './Layout.css';

export default function Layout() {

    const mapService = useRef(null);

    useEffect(() => {
        // initialize only once
        if (mapService.current) {
            return;
        }
        const mapObj = new MapService();
        mapObj.initMap();
        mapService.current = mapObj;
    }, []);


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
            <div className='layout__content_cont'>
                <div>
                    <p>Instructions:</p>
                    <ol>
                        <li>
                            IMPORTANT: Mapbox requires access token to show map, without token this project won't work.
                            First create an account on <a target='_blank' rel="noreferrer" href='https://account.mapbox.com/auth/signup/'>Mapbox </a>
                            then follow the instruction mentioned <a href='https://docs.mapbox.com/help/glossary/access-token/'>here</a> to
                            get the public acess token. Put you public access token in "MapService.js" file. Reload page once done.
                        </li>
                        <li>Use this space for you UI componets</li>
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
}
