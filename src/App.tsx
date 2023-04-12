import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxStage = {
    start: {
        scale: 0.5,
        opacity: 0,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 2,
            bounce: 0.3,
            delayChildren: 1,
            staggerChildren: 0.25,
        },
    },
};
const circleStage = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
    },
};
function App() {
    return (
        <Wrapper>
            <Box variants={boxStage} initial="start" animate="end">
                <Circle variants={circleStage} />
                <Circle variants={circleStage} />
                <Circle variants={circleStage} />
                <Circle variants={circleStage} />
            </Box>
        </Wrapper>
    );
}

export default App;
