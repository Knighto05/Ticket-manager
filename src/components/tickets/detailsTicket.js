import React from "react";
import { useParams } from "react-router-dom";

export default function DetailsTicket() {
    const params = useParams();
    console.log(params);
  return <div>detailsTicket</div>;
}
