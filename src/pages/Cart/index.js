import DisplayCart from "./styles";
import CartProducts from "../../components/CartProducts";
import CartTotal from "../../components/CartTotal";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Cart() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);

  return (
    <DisplayCart className={classes.root}>
      <Grid container spacing={3} direction="row">
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            {cart.map((product, i) => (
              <CartProducts key={i} product={product} />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <CartTotal />
          </Paper>
        </Grid>
      </Grid>
    </DisplayCart>
  );
}
