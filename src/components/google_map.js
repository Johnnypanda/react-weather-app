import React from 'react';
import { GoogleMapLoader, GoogleMap} from 'react-google-maps';
import PropTypes from 'prop-types';

export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} />}
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
            }
        />
    );
}