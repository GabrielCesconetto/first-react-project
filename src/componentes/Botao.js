import React from 'react'
import { Button } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const BotaoEstilo = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "2px 2px 0 0 #49D5E6",
        transition: ".2s all",
        "&:hover": {
            backgroundColor:  "darkblue"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

function Botao(props) {
    return (
        <BotaoEstilo variant="contained">{props.txt}</BotaoEstilo>
    )
}

export default Botao
