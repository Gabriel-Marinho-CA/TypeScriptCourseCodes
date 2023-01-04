import React from 'react';

interface Props {
  header: any
}

const Header = ({ header }: Props) => {
  return (
    <header className={header}>
      <h1>React + TS todo</h1>
    </header>
  )
}

export default Header