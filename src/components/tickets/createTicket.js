import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container } from "@mui/system";

export default function CreateTicket() {
  return <Container fixed>
    <Link to="/tickets"><ArrowBackIcon/> Go back</Link>
    </Container>;
}
