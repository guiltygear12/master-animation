import styled from "styled-components";
import { animate, motion } from "framer-motion";
import { useRef, useState } from "react";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const BigBox = styled(motion.div)`
    width: 600px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 36px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    /* overflow: hidden; */
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
const boxStage = {
    hover: { scale: 1.5, rotateZ: 180 },
    tap: { scale: 1, borderRadius: "100px" },
    drag: {
        backgroundColor: "rgb(46, 504,113)",
        transition: { duration: 10 },
    },
};
function App() {
    const bigBoxRef = useRef<HTMLDivElement>(null);
    const [trigger, setTrigger] = useState(true);
    return (
        <Wrapper>
            <BigBox ref={bigBoxRef}>
                <Box
                    drag
                    dragSnapToOrigin
                    dragElastic={0}
                    dragConstraints={bigBoxRef}
                    variants={boxStage}
                    whileHover="hover"
                    whileDrag="drag"
                    whileTap="tap"
                ></Box>
            </BigBox>
        </Wrapper>
    );
}

export default App;
