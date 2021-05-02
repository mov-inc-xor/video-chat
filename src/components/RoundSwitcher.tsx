import React, {useState} from 'react'
import {IconButton} from "@material-ui/core"

type RoundSwitchProps = {
  iconOn: React.ReactNode,
  iconOff: React.ReactNode,
  initialValue: boolean,
  toggle: (() => void),
}

export function RoundSwitcher({iconOn, iconOff, initialValue, toggle}: RoundSwitchProps) {

  const [isOn, setIsOn] = useState<boolean>(initialValue)

  const onClick = () => {
    setIsOn(!isOn)
    toggle()
  }

  return (
    <IconButton color={isOn ? 'primary' : 'secondary'} onClick={onClick}>
      {isOn ? iconOn : iconOff}
    </IconButton>
  )
}