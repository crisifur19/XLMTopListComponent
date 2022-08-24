import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState(
    "https://kwm6eoos53.execute-api.us-east-1.amazonaws.com/prod/results"
  );

  const { statusCode, components } = useFetch(url);

  return (
    <div className="App">
      <h1>Fetch Test</h1>
      {components && <h2>{components.clickUrl}</h2>}
    </div>
  );
}

export default App;
