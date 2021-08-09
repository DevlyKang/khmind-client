import React from 'react';
import { Link } from 'react-router-dom';

function LogoComponent() {
  return (
    <Link to="/">
      <svg width="64" height="64" />
    </Link>
  );
}

export default LogoComponent;
