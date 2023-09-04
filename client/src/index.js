import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
// import IndexPage from "./pages/Index/IndexPage";
// import LoginPage from "./pages/Login/LoginPage";
// import SignUpPage from "./pages/SignUp/SignUpPage";
// import PlayPage from "./pages/Play/PlayPage";
import PlayPage from "./pages/Play/PlayPage";
import FullLayout from "./components/layout/FullLayout/FullLayout";
import { SongContextProvider } from "./contexts/SongContext";
import { PlayerContextProvider } from "./contexts/playerContexts/PlayerContext";
import { PlayerControlsContextProvider } from "./contexts/playerContexts/PlayerControlsContext";
import { QueueContextProvider } from "./contexts/QueueContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SongContextProvider>
    <QueueContextProvider>
      <PlayerContextProvider>
        <PlayerControlsContextProvider>
          <BrowserRouter>
            <FullLayout>
              <Routes>
                <Route path="/" element={<PlayPage />} />
                {/* <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/play" element={<PlayPage />} /> */}
              </Routes>
            </FullLayout>
          </BrowserRouter>
        </PlayerControlsContextProvider>
      </PlayerContextProvider>
    </QueueContextProvider>
  </SongContextProvider>
);
