import React, { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Navigation from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";
import Model from "./Modelcopy";

// import general css
import "./css/styles.css";
import Closing from "./components/Main/Closing";

function App() {
  function Rig({ children }) {
    const ref = useRef();
    useFrame((state) => {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        (state.mouse.x * Math.PI) / 20,
        0.05
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        (state.mouse.y * Math.PI) / 20,
        0.05
      );
    });
    return <group ref={ref}>{children}</group>;
  }

  return (
    <Router>
      <div>
        <Navigation />
        <Canvas
          camera={{ position: [0, -10, 65], fov: 45 }}
          dpr={[1, 2]}
          style={{
            width: "auto",
            height: "1300px",
            margin: 0,
            padding: 0,
            top: 0,
            left: 0,
          }}
        >
          <pointLight position={[100, 100, 100]} intensity={0.8} />
          <hemisphereLight
            color="#ffffff"
            groundColor="#b9b9b9"
            position={[-7, 25, 13]}
            intensity={0.85}
          />
          <Suspense fallback={null}>
            <group position={[0, 10, 0]}>
              <Rig>
                <Model url="/compressed.glb" />
              </Rig>
            </group>
          </Suspense>
        </Canvas>
        <Switch>
          <Route path="/" exact component={Main} />
          {/* <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} /> */}
          <Route path="/" component={Four04} />
        </Switch>
      </div>
      <Closing />
    </Router>
  );
}

export default App;
