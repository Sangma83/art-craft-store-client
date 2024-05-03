import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { googleAPIKey } from '../googleAPIKey';

const AnyReactComponent = ({ text }) => (
  <div style={{ color: 'red' }}>
    <FaMapMarkerAlt />
  </div>
);

function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152
    },
    zoom: 14
  };

  return (
    <div className='mb-4' style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleAPIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
