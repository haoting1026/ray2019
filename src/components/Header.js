import React from 'react';
import config from '../../config';
export default function Header() {
  return (
    <div id="header">
      <h1>{config.heading}</h1>
      <h2>{config.subHeading}</h2>
    </div>
  );
}
