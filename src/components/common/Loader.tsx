import React, { CSSProperties } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const loaderContainerStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const overlayStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#000000e0',
  zIndex: 999,
};

const contentStyle: CSSProperties = {
  position: 'relative',
  zIndex: 1000,
};

const Loader: React.FC = () => {
  return (
    <div style={loaderContainerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
