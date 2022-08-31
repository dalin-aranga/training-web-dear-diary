import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const CartList = () => {
  const carts = useSelector((state) => state.carts.todos);

  const [showMore, setShowMore] = useState(false);

  const renderPost = carts.map((p) => (
    <div key={p.id}>
      <div style={{ margin: 10 }}>
        <Card sx={{ maxWidth: 345, marginLeft: 5 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {p.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <CardActions className="btn">
                {showMore
                  ? p.description
                  : `${p.description.substring(0, 100)}`}
                <Button
                  onClick={() => setShowMore(!showMore)}
                  style={{ marginLeft: 100 }}
                  size="small"
                >
                  {showMore ? "Show less" : "Show more"}
                </Button>
              </CardActions>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  ));

  return (
    <section>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderPost}</div>
    </section>
  );
};

export default CartList;
