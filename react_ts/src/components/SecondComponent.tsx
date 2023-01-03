import React from 'react'

type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>O nome dele é : {props.name}</div>
  )
}

export default SecondComponent