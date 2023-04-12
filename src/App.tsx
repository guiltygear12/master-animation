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
    height: 200vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #e09, #d0e); ;
`;
const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxStage = {};
function App() {
    const y = useMotionValue(0);
    const rotateZ = useTransform(y, [-800, 800], [-360, 360]);
    const gradient = useTransform(
        y,
        [-800, 800],
        [
            "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
            "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
        ]
    );
    const { scrollY, scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("scrollY : ", latest);
    });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("scrollYProgress : ", latest);
    });
    useEffect(() => {}, []);
    return (
        <Wrapper style={{ background: gradient }}>
            <Box
                style={{ y, rotateZ, scale: scrollYProgress }}
                drag
                dragSnapToOrigin
                initial={{ y: 800 }}
                animate={{ y: 0, transition: { duration: 3, delay: 2 } }}
            ></Box>
        </Wrapper>
    );
}

export default App;
