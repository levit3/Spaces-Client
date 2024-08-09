import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const src =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/dfe3240009fd425ddb9fe0e226d9444abbf3e86a4d8c9e87b75a5e5e7efef0f6?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271";
}

export default EventPage;
