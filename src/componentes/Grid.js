import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Botao from './Botao'

const styles = makeStyles({
    wrapper: {
       display: "flex",
       flexDirection: "column", 
       alignItems: "center", 
       padding: "0 5rem 0 5rem"
    }, 
    item: {
       paddingTop: "1rem"
    }
})

function Grid(props) {
    const {icon, title, tituloBotao} = props;
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant="h5">{title}</Typography>
            <div className={classes.item}>
                <Botao  txt={tituloBotao}/>
            </div>
        </div>
    )
}

export default Grid