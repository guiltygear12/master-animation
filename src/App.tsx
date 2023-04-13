import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: linear-gradient(135deg, #e09, #d0e); ;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;
const Circle = styled(motion.div)`
    background-color: #00a5ff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App() {
    const [clicked, setClicked] = useState(0);
    const toggleClicked = () => {
        clicked === 3 ? setClicked(0) : setClicked((prev) => prev + 1);
    };
    return (
        <Wrapper onClick={toggleClicked}>
            <Box>
                {clicked === 0 ? (
                    <Circle layoutId="circle" style={{ borderRadius: "50%" }} />
                ) : null}
            </Box>
            <Box>
                {clicked === 1 ? (
                    <Circle layoutId="circle" style={{ borderRadius: 0 }} />
                ) : null}
            </Box>
            <Box>
                {clicked === 2 ? (
                    <Circle layoutId="circle" style={{ borderRadius: 0 }} />
                ) : null}
            </Box>
            <Box>
                {clicked === 3 ? (
                    <Circle layoutId="circle" style={{ borderRadius: 0 }} />
                ) : null}
            </Box>
        </Wrapper>
    );
}

export default App;
