import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <>
            <ButtonContainer />
            <VideoContainer />,
          </>
        ),
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default App;
