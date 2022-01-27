import React from "react";
import basketball from "../../images/home/3x3_freecs.png";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Container = styled(animated.div)`
  display: inline-block;
  padding: 2.5em 4em 2.5em 4em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  padding-bottom: 1em;
`;

const StyledH1 = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
`;

const StyledH3 = styled.h3`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const DesignCard = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <StyledImg src={basketball} />
      <StyledH1>2020 3X3 Basketball</StyledH1>
      <StyledH3>
        Data Scientist, Designer <br /> and Full Stack Developer
      </StyledH3>
    </Container>
  );
};

export default DesignCard;
