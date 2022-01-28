import React, { useState, useEffect, createContext } from "react";
import "../../css/main.css";
import Develop from "../Develop/Develop";
import DesignComponent from "./DesignComponent";
import Section from "../Nav/Section";
// import styled from "styled-components";
// import * as THREE from "three";
// import { Helmet } from "react-helmet";
// import macbookPro from "../../assets/macbook-pro.glb";
// import iphone11 from "../../assets/iphone-11.glb";
// import DesignCard from "./DesignCard";
// import Closing from "./Closing";

function Main() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    // console.log(window.scrollY);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const [mouseState, setMouseState] = useState(false);

  function mouseOver() {
    setMouseState(true);
  }

  function mouseOut() {
    setMouseState(false);
  }

  // const Wrapper = styled.div`
  //   position: relative;
  //   display: grid;
  //   gap: 20px;
  //   text-align: center;
  //   margin: 0 auto;
  //   padding: 140px 20px 100px;
  //   background: blue;
  // `;

  // const Title = styled.h1`
  //   color: white;
  //   font-style: normal;
  //   font-weight: bold;
  //   font-size: 20px;
  // `;

  // const Description = styled.p`
  //   max-width: 240px;
  //   color: white;
  //   font-style: normal;
  //   font-weight: normal;
  //   font-size: 17px;
  //   line-height: 130%;
  //   margin: 0 auto;
  // `;

  const LayoutContext = createContext();

  const [isActive, setIsActive] = useState(true);
  const styleLayoutColumn = {
    flexDirection: "column",
  };

  return (
    <LayoutContext.Provider value={[isActive, setIsActive]}>
      {/* <div className="container" style={{ margin: "none", padding: "none" }}> */}
      <div className="container" style={styleLayoutColumn}>
        <div className="wrap" style={{ margin: "none", padding: "none" }}>
          <div className="overlay">
            <section
              className="scroll-section"
              id="scroll-section-0"
              style={{ textAlign: "center" }}
            >
              <p
                className="title-1"
                style={{
                  transform: `translateX(${position}px)`,
                }}
              >
                Develop
              </p>
              <p
                className="title-2"
                style={{
                  transform: `translateX(${-position}px)`,
                  fontSize: "10rem",
                }}
              >
                and{" "}
              </p>
              <p
                className="title-3"
                style={{
                  transform: `translateX(${position}px)`,
                }}
              >
                Design
              </p>
            </section>
          </div>

          <section className="scroll-section" id="scroll-section-1">
            <div className="mid-message">
              <p
                className="description"
                style={{
                  opacity: (position - 700) / 100,
                }}
              >
                <strong>Web Developer with an Design background</strong>
              </p>
              <p
                className="description"
                style={{
                  opacity: (position - 900) / 100,
                  marginBottom: "2rem",
                }}
              >
                디자이너로 근무 하던 중 우연한 계기로 프로그래밍에 눈을 떠
                개발자를 목표로, 2020년 겨울부터 프로그래밍을 공부를
                시작했습니다. 백엔드 공부를 하다가 대학교에서 배운 3D 프로그램이
                프로그래밍으로 만들었다는 것을 알고 난 뒤, 3D 개발에 흥미를
                가지게 되었습니다.
              </p>
              <p
                className="description"
                style={{
                  opacity: (position - 1000) / 100,
                  marginBottom: "2rem",
                }}
              >
                그리고 2021년 8월, 3D 웹게임 스타트업의 프론트엔드 개발자로
                입사하여 React, WebGL, Three.js, Xstate, RxJS 등 실무 기술을
                사용하여 3D 웹게임 클라이언트를 담당했습니다. 새로운 기술을
                배우고 인터랙티브 프로그래밍에 커다란 흥미를 느낍니다. 또한
                시각적인 것을 좋아하고 프로그램 다루는 것에 욕심이 있어
                Blender나 Unity에 대한 얕은 지식을 가지고 있습니다. <br />
              </p>
              <p
                className="description"
                style={{
                  opacity: (position - 1100) / 100,
                  marginBottom: "5rem",
                }}
              >
                개인적인 목표가 있다면 'Awwwards' 에서 수상을 하는 것입니다.
                개발과 디자인을 자유자재로 구현하여 사용자에게 다양한 경험을
                제공하고 싶습니다. 더 나아가 프로그래밍을 통해 모두가 즐거울 수
                있는 경험을 제공하며 매순간 성장하는 개발자가 되겠습니다.
              </p>
              <button
                style={{
                  border: "0.3px solid black",
                  background: "none",
                  width: "20rem",
                  opacity: (position - 1150) / 100,
                  fontSize: "1.2rem",
                  padding: "1rem 0 1rem 7rem ",
                  margin: "0 auto",
                  display: "block",
                  backgroundColor: mouseState ? "black" : "white",
                  color: mouseState ? "white" : "black",
                }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://hxxgxx.github.io/web-resume/";
                }}
              >
                more
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp; →
              </button>
            </div>
          </section>

          <section
            className="youtubeVideosWrapper top-100"
            id="scroll-section-2"
          >
            {/* <Wrapper>
          <Title>Three.js in React</Title>
          <Description>
            Bring your website to life with beautiful 3D objects
          </Description>
        </Wrapper> */}
            <Develop />
          </section>

          <section className="scroll-section" id="scroll-section-3">
            <p className="mid-message">
              <strong>Design 디자인</strong>
              <br />
              디자이너로 재직할 시절,
              <br />
              작업한 디자인 대표 결과물
            </p>
            {/* <img
          className="scroll-image"
          src={basketball}
          alt="3x3"
          // style={{
          //   opacity: (position - 2600) / 300,
          // transform: `translateX(${-position}px)`,
          // }}
        /> */}
            {/* <DesignCard />
        <DesignCard /> */}
            <DesignComponent />
            {/* <Youtube />  */}
            {/* <canvas className="image-blend-canvas" width="1920" height="1080"> */}
            {/* <div> */}
            {/* <Model /> */}
            {/* </div> */}
            {/* </canvas> */}
            {/* <p className="canvas-caption" style={{ paddingBottom: "20vh" }}>
              무슨 말을 하면 좋을까. 끝 마무리 말이면 좋을 것 같다. 무슨 말을
              하면 좋을까 무슨 말을 하지. 1. 네비게이션 바의 로고 이미지 바꾸기,
              2. 메인 화면에 인터랙티브한 요소 더 넣고싶다(three.js) 3.그리고
              디자인 작업물 이미지 클릭했을떄 페이지 route 할것인지? 4. 디벨롭
              프로젝트 칸 + 프로젝트 다듬어서 깃허브로 배포하기. 5. 깃허브
              아이디 새로 파기 6. footer 2021-2022년으로 바꾸기
            </p> */}
            {/* <Closing /> */}
          </section>
        </div>
        {/* </> */}
      </div>
    </LayoutContext.Provider>
  );
}

export default Main;
