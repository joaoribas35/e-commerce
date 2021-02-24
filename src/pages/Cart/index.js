import ProductList from "../../ProductList";

import CartProducts from "../../components/CartProducts";
import CartTotal from "../../components/CartTotal";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Cart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {ProductList.map((product, i) => (
              <CartProducts key={i} product={product} />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <CartTotal />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
