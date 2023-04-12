import styled from "styled-components";
import {
    animate,
    motion,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
    useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #e09, #d0e); ;
`;
const Svg = styled.svg`
    width: 100px;
    color: white;
    path {
        stroke: white;
        stroke-width: 4;
    }
`;
const stageSvg = {
    start: {
        pathLength: 0.1,
        fill: "rgba(255,255,255,0)",
        opacity: 1,
    },
    end: {
        pathLength: 1,
        fill: "rgba(255,255,255,1)",
        opacity: 1,
    },
};
function App() {
    return (
        <Wrapper>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <motion.path
                    variants={stageSvg}
                    initial="start"
                    animate="end"
                    fill="transparent"
                    transition={{
                        default: {
                            duration: 3,
                        },
                        fill: { duration: 2, delay: 1 },
                    }}
                    d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"
                />
            </Svg>
        </Wrapper>
    );
}

export default App;
