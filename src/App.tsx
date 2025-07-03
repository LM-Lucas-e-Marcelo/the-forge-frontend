import { useEffect } from "react";
import { AppRoutes } from "./routes/app-routes";
import { initFacebookPixel } from "./facebookPixel";

function App() {
  useEffect(() => {
    initFacebookPixel("398807565964875" as never);
  }, []);

  return <AppRoutes />;
}

export default App;
