import React, { useState } from "react";
import {
  Route,
  Link,
  useParams,
  useHistory,
  Switch,
  Redirect,
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";

function Body() {
  const [toLogin, settoLogin] = useState(false);
  const toLogIn = () => {
    settoLogin(true);
  };
  return (
    <div className="Body">
      <Typography variant= 'h2'>Life Stream</Typography>
      <Typography variant = 'h3'>Connecting blood donors with recipients</Typography>
      <button onClick={toLogIn}>Donate now</button>
      {toLogin ? <Redirect to="/Login" /> : null}
    </div>
  );
}

export default Body;