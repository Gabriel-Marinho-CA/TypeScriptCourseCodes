import React from 'react';

interface Props {
  footer: any
}

function Footer({ footer }: Props) {
  return (
    <footer className={footer}>
      <p>
        <span>React + TS Todo @2023</span>
      </p>
    </footer>
  )
}

export default Footer