import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <img
          src="https://www.antargyan.com/images/thumbs/0000017_0000026_logo.png"
          alt="Logo"
          height="30"
          style={{ marginLeft: '10px' , marginRight: '225px' }}
        />

        <span style={{ color: '#000000', fontSize: '20px', fontWeight: 'bold' }}>
          Antargyan Cloudworks LLP
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
