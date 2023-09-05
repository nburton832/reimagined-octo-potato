import * as React from 'react'
import { Link } from 'gatsby'

export default function Home() {
  // Define inline styles for the support button
  const supportButtonStyle = {
    display: 'inline-block',
    backgroundColor: '#FFDD00', // Customize the background color
    color: '#000', // Customize the text color
    padding: '10px 20px', // Add padding for spacing
    borderRadius: '5px',
    fontSize: '16px',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <>
      <h1>Rendering Modes Starter</h1>
      <ul>
        <li>
          <Link to='/dsg'>DSG page</Link>
        </li>
        <li>
          <Link to='/ssr'>SSR page</Link>
        </li>
      </ul>
      <a
        style={supportButtonStyle}
        href="https://www.buymeacoffee.com/nyshawntru1"
        target="_blank"
        rel="noopener noreferrer" // Add this attribute
      >
        Buy Me a Coffee
      </a>

    </>
  )
}
