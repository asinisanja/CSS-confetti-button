import React, {useCallback} from "https://cdn.skypack.dev/react@17";
import {render} from "https://cdn.skypack.dev/react-dom@17";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
function App(){
    const onClick = useCallback(()➡️{
        confetti({
            particleCount: 150,
            spread: 60
        });
    }, []);
    return(
        <button className="button" onClick={onClick}>
            <span>🎉</span>
            <span>Like</span>
        </button>
    );
}
render(<App/>, document, getElementById("root"));