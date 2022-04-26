import React from 'react'
import Botao from './Botao'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    itemMenu: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <Typography variant="h6" className={classes.itemMenu}>
                   Início
                </Typography>
                <Typography variant="h6" className={classes.itemMenu}>
                    Sobre Nós
                </Typography>
                <Typography variant="h6" className={classes.itemMenu}>
                    Portfólio
                </Typography>
                <Typography variant="h6" className={classes.itemMenu}>
                    Serviços 
                </Typography>
                <Typography variant="h6" className={classes.itemMenu}>
                    Contato
                </Typography>
                <Botao txt="Saiba Mais"></Botao>
            </Toolbar>
    )
}

export default NavBar