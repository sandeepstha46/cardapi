import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Typography,
} from "@material-ui/core";
import { Alert, Skeleton, Snackbar } from "@mui/material";

function CommonCard({ drink, isLoading, onFetchNew }) {
  function onLinkClick(e) {
    e.preventDefault();
    onFetchNew();
  }
  return (
    <div>
      <div className={"card-css"}>
        <Card>
          {isLoading ? (
            <Skeleton variant={"text"} width={500} height={64} />
          ) : (
            <CardHeader id={"card-header1"} title={drink.strDrink} />
          )}

          {/*loading="lazy"*/}

          {isLoading ? (
            <Skeleton variant={"rectangular"} width={500} height={400} />
          ) : (
            <CardMedia
              component="img"
              height="400"
              image={drink.strDrinkThumb}
              alt=""
            />
          )}

          <CardContent id={"content"}>
            <p id={"content-space"}>
              <span id={"content-id"}>Instructions: </span>
              {drink.strInstructions}{" "}
            </p>
          </CardContent>
          <CardContent id={"content2"}>
            <p id={"content-id"}>Ingredients:</p>
            <ul>
              <li>{drink.strIngredient1}</li>
              <li>{drink.strIngredient2}</li>
              <li>{drink.strIngredient3}</li>
            </ul>
          </CardContent>

          <CardContent>
            <div id={"onclick"}>
              <Button
                onClick={onLinkClick}
                variant={"contained"}
                id={"button1"}
              >
                Show New Drink
              </Button>
              <Snackbar autoHideDuration={6000}>
                <Alert severity="success" sx={{ width: "100%" }}>
                  This is a success message!
                </Alert>
              </Snackbar>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CommonCard;
