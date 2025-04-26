import { AppRouter } from "./routes/AppRouter";
import { RouterProvider } from "react-router";
import { StoreProvider } from "./providers/StoreProvider";

import "./styles/index.css";

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={AppRouter} />
    </StoreProvider>
  );
}

export default App;
