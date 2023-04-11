import styled from "styled-components";
import { motion } from "framer-motion";
import { type } from "os";

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
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
    return (
        <Wrapper>
            <Box
                transition={{
                    type: "spring",
                    delay: 1,
                }}
                initial={{ scale: 0, rotateZ: 180 }}
                animate={{ scale: 1, rotateZ: 0 }}
            >
                12
            </Box>
        </Wrapper>
    );
}

export default App;
