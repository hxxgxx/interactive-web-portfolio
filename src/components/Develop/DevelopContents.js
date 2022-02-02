import React, { Component } from "react";
import three from "../../images/home/3d_port.png";
import design from "../../images/home/design_port.png";
import spring from "../../images/home/java_spring_port.png";
import diary from "../../images/home/diary.png";
import webapp from "../../images/home/webapp.png";
import map from "../../images/home/map.png";

const devProjects = [
  {
    title: "Three Web Application",
    date: "2021.12 - (진행중) ",
    desc: "WebGL을 사용하여 3D 요소를 활용한 반응형 웹 인터랙티브 3D Web Resume 입니다.",
    img: `${webapp}`,
    url: "https://github.com/hxxgxx/three-portfolio",
  },
  {
    title: "mini Seoul",
    date: "2022.01 - (진행중) ",
    desc: "mini Tokyo에 영감을 받아 Three.js 및 mapbox, harp.gl를 사용하여 서울의 지하철 정보를 알려주는 웹 사이트입니다. ",
    img: `${map}`,
    url: "https://github.com/hxxgxx/map-practice",
  },
  {
    title: "React Diary",
    date: "2021.11.01 - 2021.11.25",
    desc: "React를 사용하여 사진으로 기록할 수 있는 개인용 다이어리 웹 애플리케이션입니다.",
    img: `${diary}`,
  },
  {
    title: "3D Portfolio using THREE.js",
    date: "2021.06 - 2021.07",
    desc: "skycube, 3D object, orbitcontrols, 3d game 등 3D 라이브러리를 사용한 3D 포트폴리오 웹사이트입니다. 3D에 대한 흥미와 이해를 높일 수 있는 작업이었습니다.",
    img: `${three}`,
    url: "https://hxxgxx.github.io/3d-portfolio/",
  },
  {
    title: "Design Web Portfolio",
    date: "2021.07",
    desc: "디자이너로 근무할 때의 디자인 작업물을 React와 Gatsby를 사용하여 제작한 디자인 웹 포트폴리오 입니다.",
    img: `${design}`,
    url: "https://hxxgxx.github.io/design-web-portfolio/",
  },
  {
    title: "우리 주인이 달라졌어요",
    date: "2021.04.01 - 2021.04.25",
    desc: "바쁜 주인을 대신해서 반려견의 산책을 도와줄 사람을 매칭해주는 커뮤니티입니다. 게시판 이용, 회원들 간의 메세지 전송 등을 통해 반려견에 대한 정보를 공유합니다.",
    img: `${spring}`,
    url: "https://github.com/hxxgxx/petMatching",
  },
];

function DevCon({ title, date, desc, img, url }) {
  return (
    <>
      <a href={url}>
        <img src={img} alt={img} style={{ paddingBottom: "1.5rem" }} />
      </a>
      <div className="videoTitle" style={{ paddingBottom: "0.15rem" }}>
        {title}
      </div>
      <div className="videoDesc" style={{ paddingBottom: "0.5rem" }}>
        {date}
      </div>
      <div className="videoDesc" style={{ paddingBottom: "2.5rem" }}>
        {desc}
      </div>
    </>
  );
}

function DevelopContents() {
  return (
    <>
      {devProjects.map((devcon, i) => (
        <div className="col-sm-6 col-md-4">
          <div className="videoInfoWrapper">
            <DevCon
              img={devcon.img}
              title={devcon.title}
              date={devcon.date}
              desc={devcon.desc}
              url={devcon.url}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default DevelopContents;
