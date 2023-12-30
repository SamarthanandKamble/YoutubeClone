import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </div>
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
