export const useCodeExamplesAnimation = () => {
    const transition = `p{
    padding: 15px;
    background-color: #535bf2;

    transition: background-color 800ms;
}

p:hover{
    background-color: #e50035;
}`
    const keyframesAndAnimation = `div{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #535bf2;

    animation: move 10s linear infinite;
}

@keyframes move {
    0% {
        left: 0;
        transform: translateX(0);
    }
    50% {
        left: 100%;
        transform: translateX(-100%);
    }
    100% {
        left: 0;
        transform: translateX(0);
    }
}`
    const gradient = `div{
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg, #e50000, blue, #e50000);
    background-size: 300% 100%;
    animation: gradient 10s linear infinite;
}

@keyframes gradient {
    0% {
        background-position: 0 50%;
    }
    100% {
        background-position: 150% 50%;
    }
}`
    return {transition, keyframesAndAnimation, gradient}
}