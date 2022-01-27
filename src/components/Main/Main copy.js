import React from "react";

// import appletv from "../../images/icons/apple-tv-logo.png";
// import banker from "../../images/home/banker.png";
// import series5 from "../../images/icons/watch-series5-logo.png";
// import arcade from "../../images/icons/arcade.png";

// import Fourth from "./Fourth/Fourth";
// import Rating from "./Rating/Rating";
import { Helmet } from "react-helmet";

import Youtube from "../Develop/Develop";
import "../../css/main.css";
// import ScriptTag from "react-script-tag";
import macbookPro from "../../assets/macbook-pro.glb";

// import $ from "jquery";
// window.$ = $;

// $(function () {
//   let yOffset = 0; // window.pageYOffset 대신 쓸 변수
//   let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
//   let currentScene = 0; // 현재 활성호된(눈 앞에 보고 있는) Tls(scroll-scene)
//   let enterNewScene = false; // 새로운 scene이 시작된 순간 true
//   let acc = 0.1;
//   let delayedYOffset = 0;
//   let rafId;
//   let rafState;

//   const sceneInfo = [
//     {
//       // 0
//       type: "sticky",
//       heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
//       scrollHeight: 0,
//       objs: {
//         container: document.querySelector("#scroll-section-0"),
//         messageA: document.querySelector("#scroll-section-0 .main-message.a"),
//         messageB: document.querySelector("#scroll-section-0 .main-message.b"),
//         messageC: document.querySelector("#scroll-section-0 .main-message.c"),
//         messageD: document.querySelector("#scroll-section-0 .main-message.d"),
//         canvas: document.querySelector("#video-canvas-0"),
//         context: document.querySelector("#video-canvas-0").getContext("2d"),
//         videoImages: [],
//       },
//       values: {
//         videoImageCount: 300,
//         imageSequence: [0, 299],
//         canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
//         messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
//         messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
//         messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
//         messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
//         messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
//         messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
//         messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
//         messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
//         messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
//         messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
//         messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
//         messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
//         messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
//         messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
//         messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
//         messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
//       },
//     },
//     {
//       // 1
//       type: "normal",
//       // heightNum: 5, // type normal에서는 필요 없음
//       scrollHeight: 0,
//       objs: {
//         container: document.querySelector("#scroll-section-1"),
//       },
//     },
//     {
//       // 2
//       type: "sticky",
//       heightNum: 5,
//       scrollHeight: 0,
//       objs: {
//         container: document.querySelector("#scroll-section-2"),
//         messageA: document.querySelector("#scroll-section-2 .a"),
//         messageB: document.querySelector("#scroll-section-2 .b"),
//         messageC: document.querySelector("#scroll-section-2 .c"),
//         pinB: document.querySelector("#scroll-section-2 .b .pin"),
//         pinC: document.querySelector("#scroll-section-2 .c .pin"),
//         canvas: document.querySelector("#video-canvas-1"),
//         context: document.querySelector("#video-canvas-1").getContext("2d"),
//         videoImages: [],
//       },
//       values: {
//         videoImageCount: 960,
//         imageSequence: [0, 959],
//         canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
//         canvas_opacity_out: [1, 0, { start: 0.95, end: 1 }],
//         messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
//         messageB_translateY_in: [30, 0, { start: 0.6, end: 0.65 }],
//         messageC_translateY_in: [30, 0, { start: 0.87, end: 0.92 }],
//         messageA_opacity_in: [0, 1, { start: 0.25, end: 0.3 }],
//         messageB_opacity_in: [0, 1, { start: 0.6, end: 0.65 }],
//         messageC_opacity_in: [0, 1, { start: 0.87, end: 0.92 }],
//         messageA_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],
//         messageB_translateY_out: [0, -20, { start: 0.68, end: 0.73 }],
//         messageC_translateY_out: [0, -20, { start: 0.95, end: 1 }],
//         messageA_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],
//         messageB_opacity_out: [1, 0, { start: 0.68, end: 0.73 }],
//         messageC_opacity_out: [1, 0, { start: 0.95, end: 1 }],
//         pinB_scaleY: [0.5, 1, { start: 0.6, end: 0.65 }],
//         pinC_scaleY: [0.5, 1, { start: 0.87, end: 0.92 }],
//       },
//     },
//     {
//       // 3
//       type: "sticky",
//       heightNum: 5,
//       scrollHeight: 0,
//       objs: {
//         container: document.querySelector("#scroll-section-3"),
//         canvasCaption: document.querySelector(".canvas-caption"),
//         canvas: document.querySelector(".image-blend-canvas"),
//         context: document.querySelector(".image-blend-canvas").getContext("2d"),
//         imagesPath: [
//           "./images/blend-image-1.jpg",
//           "./images/blend-image-2.jpg",
//         ],
//         images: [],
//       },
//       values: {
//         rect1X: [0, 0, { start: 0, end: 0 }],
//         rect2X: [0, 0, { start: 0, end: 0 }],
//         blendHeight: [0, 0, { start: 0, end: 0 }],
//         canvas_scale: [0, 0, { start: 0, end: 0 }],
//         canvasCaption_opacity: [0, 1, { start: 0, end: 0 }],
//         canvasCaption_translateY: [20, 0, { start: 0, end: 0 }],
//         rectStartY: 0,
//       },
//     },
//   ];

//   function setCanvasImages() {
//     let imgElem;
//     for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
//       imgElem = document.createElement("img"); // === new Image();
//       imgElem.src = `./video/001/IMG_${6726 + i}.JPG`;
//       sceneInfo[0].objs.videoImages.push(imgElem);
//     }

//     let imgElem2;
//     for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
//       imgElem2 = document.createElement("img"); // === new Image();
//       imgElem2.src = `./video/002/IMG_${7027 + i}.JPG`;
//       sceneInfo[2].objs.videoImages.push(imgElem2);
//     }

//     let imgElem3;
//     for (let i = 0; i < sceneInfo[3].objs.imagesPath.length; i++) {
//       imgElem3 = document.createElement("img");
//       imgElem3.src = sceneInfo[3].objs.imagesPath[i];
//       sceneInfo[3].objs.images.push(imgElem3);
//     }
//   }

//   function checkMenu() {
//     if (yOffset > 44) {
//       document.body.classList.add("local-nav-stick");
//     } else {
//       document.body.classList.remove("local-nav-stick");
//     }
//   }

//   function setLayout() {
//     // 각 스크롤 섹션의 높이 세팅
//     for (let i = 0; i < sceneInfo.length; i++) {
//       if (sceneInfo[i].type === "sticky") {
//         sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
//       } else if (sceneInfo[i].type === "normal") {
//         sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
//       }
//       sceneInfo[
//         i
//       ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
//     }

//     yOffset = window.pageYOffset;

//     let totalScrollHeight = 0;
//     for (let i = 0; i < sceneInfo.length; i++) {
//       totalScrollHeight += sceneInfo[i].scrollHeight;
//       if (totalScrollHeight >= yOffset) {
//         currentScene = i;
//         break;
//       }
//     }
//     document.body.setAttribute("id", `show-scene-${currentScene}`);

//     const heightRatio = window.innerHeight / 1080;
//     sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
//     sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
//   }

//   function scrollLoop() {
//     enterNewScene = false;
//     prevScrollHeight = 0;
//     for (let i = 0; i < currentScene; i++) {
//       prevScrollHeight += sceneInfo[i].scrollHeight;
//     }

//     if (
//       delayedYOffset >
//       prevScrollHeight + sceneInfo[currentScene].scrollHeight
//     ) {
//       enterNewScene = true;
//       currentScene++;
//       document.body.setAttribute("id", `show-scene-${currentScene}`);
//     }

//     if (delayedYOffset < prevScrollHeight) {
//       enterNewScene = true;
//       if (currentScene === 0) return; // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일, 사파리)
//       currentScene--;
//       document.body.setAttribute("id", `show-scene-${currentScene}`);
//     }
//     if (enterNewScene) return;
//     playAnimation();
//   }

//   function playAnimation() {
//     const objs = sceneInfo[currentScene].objs;
//     const values = sceneInfo[currentScene].values;
//     const currentYOffset = yOffset - prevScrollHeight;
//     const scrollHeight = sceneInfo[currentScene].scrollHeight;
//     const scrollRatio = currentYOffset / scrollHeight;

//     switch (currentScene) {
//       case 0:
//         // console.log("0 play");
//         // let sequence = Math.round(
//         //   calcValues(values.imageSequence, currentYOffset)
//         // );
//         // objs.context.drawImage(objs.videoImages[sequence], 0, 0);
//         objs.canvas.style.opacity = calcValues(
//           values.canvas_opacity,
//           currentYOffset
//         );
//         if (scrollRatio <= 0.22) {
//           //in
//           objs.messageA.style.opacity = calcValues(
//             values.messageA_opacity_in,
//             currentYOffset
//           );
//           objs.messageA.style.transform = `translate3d(0,${calcValues(
//             values.messageA_translateY_in,
//             currentYOffset
//           )}%,0)`;
//         } else {
//           //out
//           objs.messageA.style.opacity = calcValues(
//             values.messageA_opacity_out,
//             currentYOffset
//           );
//           objs.messageA.style.transform = `translate3d(0,${calcValues(
//             values.messageA_translateY_out,
//             currentYOffset
//           )}%,0)`;
//         }
//         if (scrollRatio <= 0.42) {
//           //in
//           objs.messageB.style.opacity = calcValues(
//             values.messageB_opacity_in,
//             currentYOffset
//           );
//           objs.messageB.style.transform = `translate3d(0,${calcValues(
//             values.messageB_translateY_in,
//             currentYOffset
//           )}%,0)`;
//         } else {
//           //out
//           objs.messageB.style.opacity = calcValues(
//             values.messageB_opacity_out,
//             currentYOffset
//           );
//           objs.messageB.style.transform = `translate3d(0,${calcValues(
//             values.messageB_translateY_out,
//             currentYOffset
//           )}%,0)`;
//         }
//         if (scrollRatio <= 0.62) {
//           //in
//           objs.messageC.style.opacity = calcValues(
//             values.messageC_opacity_in,
//             currentYOffset
//           );
//           objs.messageC.style.transform = `translate3d(0,${calcValues(
//             values.messageC_translateY_in,
//             currentYOffset
//           )}%,0)`;
//         } else {
//           //out
//           objs.messageC.style.opacity = calcValues(
//             values.messageC_opacity_out,
//             currentYOffset
//           );
//           objs.messageC.style.transform = `translate3d(0,${calcValues(
//             values.messageC_translateY_out,
//             currentYOffset
//           )}%,0)`;
//         }
//         if (scrollRatio <= 0.82) {
//           //in
//           objs.messageD.style.opacity = calcValues(
//             values.messageD_opacity_in,
//             currentYOffset
//           );
//           objs.messageD.style.transform = `translate3d(0,${calcValues(
//             values.messageD_translateY_in,
//             currentYOffset
//           )}%,0)`;
//         } else {
//           //out
//           objs.messageD.style.opacity = calcValues(
//             values.messageD_opacity_out,
//             currentYOffset
//           );
//           objs.messageD.style.transform = `translate3d(0,${calcValues(
//             values.messageD_translateY_out,
//             currentYOffset
//           )}%,0)`;
//         }

//         break;
//       case 2:
//         // let sequence2 = Math.round(
//         //   calcValues(values.imageSequence, currentYOffset)
//         // );
//         // objs.context.drawImage(objs.videoImages[sequence2], 0, 0);
//         if (scrollRatio <= 0.5) {
//           objs.canvas.style.opacity = calcValues(
//             values.canvas_opacity_in,
//             currentYOffset
//           );
//         } else {
//           objs.canvas.style.opacity = calcValues(
//             values.canvas_opacity_out,
//             currentYOffset
//           );
//         }
//         if (scrollRatio <= 0.32) {
//           //in
//           objs.messageA.style.opacity = calcValues(
//             values.messageA_opacity_in,
//             currentYOffset
//           );
//           objs.messageA.style.transform = `translate3d(0,${calcValues(
//             values.messageA_translateY_in,
//             currentYOffset
//           )}%,0)`;
//         } else {
//           //out
//           objs.messageA.style.opacity = calcValues(
//             values.messageA_opacity_out,
//             currentYOffset
//           );
//           objs.messageA.style.transform = `translate3d(0,${calcValues(
//             values.messageA_translateY_out,
//             currentYOffset
//           )}%,0)`;
//         }
//         if (scrollRatio <= 0.67) {
//           //in
//           objs.messageB.style.opacity = calcValues(
//             values.messageB_opacity_in,
//             currentYOffset
//           );
//           objs.messageB.style.transform = `translate3d(0,${calcValues(
//             values.messageB_translateY_in,
//             currentYOffset
//           )}%,0)`;
//           objs.pinB.style.transform = `scaleY(${calcValues(
//             values.pinB_scaleY,
//             currentYOffset
//           )})`;
//         } else {
//           //out
//           objs.messageB.style.opacity = calcValues(
//             values.messageB_opacity_out,
//             currentYOffset
//           );
//           objs.messageB.style.transform = `translate3d(0,${calcValues(
//             values.messageB_translateY_out,
//             currentYOffset
//           )}%,0)`;
//           objs.pinB.style.transform = `scaleY(${calcValues(
//             values.pinB_scaleY,
//             currentYOffset
//           )})`;
//         }
//         if (scrollRatio <= 0.93) {
//           //in
//           objs.messageC.style.opacity = calcValues(
//             values.messageC_opacity_in,
//             currentYOffset
//           );
//           objs.messageC.style.transform = `translate3d(0,${calcValues(
//             values.messageC_translateY_in,
//             currentYOffset
//           )}%,0)`;
//           objs.pinC.style.transform = `scaleY(${calcValues(
//             values.pinC_scaleY,
//             currentYOffset
//           )})`;
//         } else {
//           //out
//           objs.messageC.style.opacity = calcValues(
//             values.messageC_opacity_out,
//             currentYOffset
//           );
//           objs.messageC.style.transform = `translate3d(0,${calcValues(
//             values.messageC_translateY_out,
//             currentYOffset
//           )}%,0)`;
//           objs.pinC.style.transform = `scaleY(${calcValues(
//             values.pinC_scaleY,
//             currentYOffset
//           )})`;
//         }

//         // currentScene 3에서 쓰는 캔버스를 미리 그려주기 시작
//         if (scrollRatio > 0.9) {
//           const objs = sceneInfo[3].objs;
//           const values = sceneInfo[3].values;
//           const widthRatio = window.innerWidth / objs.canvas.width;
//           const heightRatio = window.innerHeight / objs.canvas.height;
//           let canvasScaleRatio;

//           if (widthRatio <= heightRatio) {
//             // 캔버스보다 브라우저 창이 홀쭉한 경우
//             canvasScaleRatio = heightRatio;
//           } else {
//             // 캔버스보다 브라우저 창이 납작한 경우
//             canvasScaleRatio = widthRatio;
//           }
//           objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
//           objs.context.fillStyle = "white";
//           objs.context.drawImage(objs.images[0], 0, 0);

//           // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
//           const recalculatedInnerWidth =
//             document.body.offsetWidth / canvasScaleRatio;
//           const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

//           const whiteRectWidth = recalculatedInnerWidth * 0.15;
//           values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
//           values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
//           values.rect2X[0] =
//             values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
//           values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

//           // 좌우 흰색 박스 그리기
//           objs.context.fillRect(
//             parseInt(values.rect1X[0]),
//             0,
//             parseInt(whiteRectWidth),
//             objs.canvas.height
//           );
//           objs.context.fillRect(
//             parseInt(values.rect2X[0]),
//             0,
//             parseInt(whiteRectWidth),
//             objs.canvas.height
//           );
//         }
//         break;
//       case 3:
//         // console.log("3 play");
//         let step = 0;
//         // 가로/세로 모두 꽉 차게 하기위해 여기서 세팅(계산 필요)
//         const widthRatio = window.innerWidth / objs.canvas.width;
//         const heightRatio = window.innerHeight / objs.canvas.height;
//         let canvasScaleRatio;

//         if (widthRatio <= heightRatio) {
//           // 캔버스보다 브라우저 창이 홀쭉한 경우
//           canvasScaleRatio = heightRatio;
//         } else {
//           // 캔버스보다 브라우저 창이 납작한 경우
//           canvasScaleRatio = widthRatio;
//         }
//         objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
//         objs.context.fillStyle = "white";
//         objs.context.drawImage(objs.images[0], 0, 0);

//         // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
//         const recalculatedInnerWidth =
//           document.body.offsetWidth / canvasScaleRatio;
//         const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

//         const whiteRectWidth = recalculatedInnerWidth * 0.15;
//         values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
//         values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
//         values.rect2X[0] =
//           values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
//         values.rect2X[1] = values.rect2X[0] + whiteRectWidth;
//         if (!values.rectStartY) {
//           // values.rectStartY = objs.canvas.getBoundingClientRect().top;
//           values.rectStartY =
//             objs.canvas.offsetTop +
//             (objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2;
//           values.rect1X[2].start = window.innerHeight / 2 / scrollHeight;
//           values.rect2X[2].start = window.innerHeight / 2 / scrollHeight;
//           values.rect1X[2].end = values.rectStartY / scrollHeight;
//           values.rect2X[2].end = values.rectStartY / scrollHeight;
//         }
//         // 좌우 흰색 박스 그리기
//         objs.context.fillRect(
//           parseInt(calcValues(values.rect1X, currentYOffset)),
//           0,
//           parseInt(whiteRectWidth),
//           objs.canvas.height
//         );
//         objs.context.fillRect(
//           parseInt(calcValues(values.rect2X, currentYOffset)),
//           0,
//           parseInt(whiteRectWidth),
//           objs.canvas.height
//         );

//         if (scrollRatio < values.rect1X[2].end) {
//           step = 1;
//           objs.canvas.classList.remove("sticky");
//         } else {
//           step = 2;
//           // 이미지 블렌드
//           // imageBlendY: [0, 0, {start: 0, end: 0}]
//           values.blendHeight[0] = 0;
//           values.blendHeight[1] = objs.canvas.height;
//           values.blendHeight[2].start = values.rect1X[2].end;
//           values.blendHeight[2].end = values.blendHeight[2].start + 0.2;
//           const blendHeight = calcValues(values.blendHeight, currentYOffset);

//           objs.context.drawImage(
//             objs.images[1],
//             0,
//             objs.canvas.height - blendHeight,
//             objs.canvas.width,
//             blendHeight,
//             0,
//             objs.canvas.height - blendHeight,
//             objs.canvas.width,
//             blendHeight
//           );

//           objs.canvas.classList.add("sticky");
//           objs.canvas.style.top = `${
//             -(objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2
//           }px`;

//           if (scrollRatio > values.blendHeight[2].end) {
//             values.canvas_scale[0] = canvasScaleRatio;
//             values.canvas_scale[1] =
//               document.body.offsetWidth / (1.5 * objs.canvas.width);
//             values.canvas_scale[2].start = values.blendHeight[2].end;
//             values.canvas_scale[2].end = values.canvas_scale[2].start + 0.2;

//             objs.canvas.style.transform = `scale(${calcValues(
//               values.canvas_scale,
//               currentYOffset
//             )})`;
//             objs.canvas.style.marginTop = 0;
//           }
//           if (
//             scrollRatio > values.canvas_scale[2].end &&
//             values.canvas_scale[2].end > 0
//           ) {
//             objs.canvas.classList.remove("sticky");
//             objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`;

//             values.canvasCaption_opacity[2].start = values.canvas_scale[2].end;
//             values.canvasCaption_opacity[2].end =
//               values.canvasCaption_opacity[2].start + 0.1;
//             objs.canvasCaption.style.opacity = calcValues(
//               values.canvasCaption_opacity,
//               currentYOffset
//             );

//             values.canvasCaption_translateY[2].start =
//               values.canvasCaption_opacity[2].start;
//             values.canvasCaption_translateY[2].end =
//               values.canvasCaption_opacity[2].end;
//             objs.canvasCaption.style.transform = `translate3d(0, ${calcValues(
//               values.canvasCaption_translateY,
//               currentYOffset
//             )}%, 0)`;
//           }
//         }
//         break;
//     }
//   }

//   function calcValues(values, currentYOffset) {
//     let rv;
//     //   현재 씬(스크롤 섹션)에서 스크롤 된 범위를 비율로 구하기
//     const scrollHeight = sceneInfo[currentScene].scrollHeight;
//     const scrollRatio = currentYOffset / scrollHeight;
//     if (values.length === 3) {
//       // start ~ end 사이에 애니메이션 실행
//       const partScrollStart = values[2].start * scrollHeight;
//       const partScrollEnd = values[2].end * scrollHeight;
//       const partScrollHeight = partScrollEnd - partScrollStart;
//       if (
//         currentYOffset >= partScrollStart &&
//         currentYOffset <= partScrollEnd
//       ) {
//         rv =
//           ((currentYOffset - partScrollStart) / partScrollHeight) *
//             (values[1] - values[0]) +
//           values[0];
//       } else if (currentYOffset < partScrollStart) {
//         rv = values[0];
//       } else if (currentYOffset > partScrollEnd) {
//         rv = values[1];
//       }
//     } else {
//       rv = scrollRatio * (values[1] - values[0]) + values[0];
//     }

//     return rv;
//   }

//   function loop() {
//     delayedYOffset = delayedYOffset + (yOffset - delayedYOffset) * acc;

//     if (!enterNewScene) {
//       if (currentScene === 0 || currentScene === 2) {
//         const currentYOffset = delayedYOffset - prevScrollHeight;
//         const objs = sceneInfo[currentScene].objs;
//         const values = sceneInfo[currentScene].values;
//         let sequence = Math.round(
//           calcValues(values.imageSequence, currentYOffset)
//         );
//         if (objs.videoImages[sequence]) {
//           objs.context.drawImage(objs.videoImages[sequence], 0, 0);
//         }
//       }
//     }

//     rafId = requestAnimationFrame(loop);

//     if (Math.abs(yOffset - delayedYOffset) < 1) {
//       cancelAnimationFrame(rafId);
//       rafState = false;
//     }
//   }

//   window.addEventListener("load", () => {
//     document.body.classList.remove("before-load");
//     setLayout();
//     sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);

//     let tempYOffset = yOffset;
//     let tempScrollCount = 0;
//     if (yOffset > 0) {
//       let siId = setInterval(() => {
//         window.scrollTo(0, tempYOffset);
//         tempYOffset += 5;

//         if (tempScrollCount > 20) {
//           clearInterval(siId);
//         }
//         tempScrollCount++;
//       }, 20);
//     }

//     window.addEventListener("scroll", () => {
//       yOffset = window.pageYOffset;
//       scrollLoop();
//       checkMenu();
//       if (!rafState) {
//         rafId = requestAnimationFrame(loop);
//         rafState = true;
//       }
//     });

//     window.addEventListener("resize", () => {
//       if (window.innerWidth > 900) {
//         setLayout();
//         sceneInfo[3].values.rectStartY = 0;
//       }
//     });

//     window.addEventListener("orientationchange", () => {
//       setTimeout(setLayout, 500);
//     });

//     document
//       .querySelector(".loading")
//       .addEventListener("transitionend", (e) => {
//         document.body.removeChild(e.currentTarget);
//       });
//   });

//   setCanvasImages();
// });

function Main() {
  return (
    <div className="container">
      {/* <ScriptTag type="text/javascript" src="./mainPage.js" /> */}
      {/* <Helmet>
        <script src="./mainPage.js" type="text/javascript" />
      </Helmet> */}
      <Helmet>
        <link rel="prefetch" href={macbookPro} as="fetch" crossOrigin="" />
      </Helmet>
      <section className="scroll-section" id="scroll-section-0">
        <h1>Hong Hyein</h1>

        {/* <Handphone /> */}

        <div className="sticky-elem sticky-elem-canvas">
          <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
        </div>
        <div className="sticky-elem main-message a">
          <p>
            Develop
            <br />
            and <br />
            Design
          </p>
        </div>
        <div className="sticky-elem main-message b">
          <p>
            개발과
            <br />
            디자인을
            <br />
            자유롭게
          </p>
        </div>
        <div className="sticky-elem main-message c">
          <p>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </div>
        <div className="sticky-elem main-message d">
          <p>
            새롭게 입가를
            <br />
            찾아온 매혹
          </p>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-1">
        <p className="description">
          <strong>Web Developer with an Design background</strong>
          디자이너로 근무 하던 중 우연한 계기로 프로그래밍에 눈을 떠 개발자를
          목표로, 2020년 겨울부터 프로그래밍을 공부를 시작했습니다. 백엔드
          공부를 하던 중 대학교에서 배운 3D 프로그램이 프로그래밍으로 만들었다는
          것을 알고 난 뒤, 3D 개발에 흥미를 가지게 되었습니다. 그리고 2021년
          8월, 3D 웹게임 회사의 프론트엔드 개발자로 입사하여 WebGL, Three.js,
          React, Xstate, RxJS 등 실무 기술을 사용한 웹게임 화면을 담당했습니다.
          새로운 기술을 배우고 인터랙티브한 것을 만드는 것에 커다란 흥미를
          느낍니다. 프로그래밍을 통해 모두가 즐거울 수 있는 경험을 제공하며
          매순간 성장하는 개발자가 되겠습니다.
        </p>
      </section>
      <section className="scroll-section" id="scroll-section-2">
        <div className="sticky-elem sticky-elem-canvas">
          <canvas id="video-canvas-1" width="1920" height="1080"></canvas>
        </div>
        <div className="sticky-elem main-message a">
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </div>
        <div className="sticky-elem desc-message b">
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
            오롯이 당신과 음료만 남게 되죠.
          </p>
          <div className="pin"></div>
        </div>
        <div className="sticky-elem desc-message c">
          <p>
            디자인 앤 퀄리티 오브 스웨덴,
            <br />
            메이드 인 차이나
          </p>
          <div className="pin"></div>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>Retina 머그</strong>
          <br />
          아이디어를 광활하게 펼칠
          <br />
          아름답고 부드러운 음료 공간.
        </p>
        <canvas
          className="image-blend-canvas"
          width="1920"
          height="1080"
        ></canvas>
        <p className="canvas-caption">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
          fuga quae perspiciatis veniam impedit et, ratione est optio porro.
          Incidunt aperiam nemo voluptas odit quisquam harum in mollitia.
          Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
          inventore a rerum distinctio vero illo magni possimus temporibus
          dolores neque adipisci, repudiandae repellat. Ducimus accusamus
          similique quas earum laborum. Autem tempora repellendus asperiores
          illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
          rerum neque error deleniti quis, et, quibusdam, est autem voluptate
          rem voluptas. Ratione soluta similique harum nihil vel. Quas inventore
          perferendis iusto explicabo animi eos ratione obcaecati.
        </p>
      </section>

      <section className="youtubeVideosWrapper top-100">
        <Youtube />
        {/* <Model /> */}
      </section>
    </div>
  );
}

export default Main;
