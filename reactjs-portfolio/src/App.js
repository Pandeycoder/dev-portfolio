import RoutesApp from "./routes";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <RoutesApp />
      <SpeedInsights />
    </>
  );
}

export default App;
