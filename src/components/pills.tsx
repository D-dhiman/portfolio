interface PillProps {
    color?: string;       
    width?: string;  
    length?: string;      
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    text?: string;
}

function Pill({
    color = "#5b21b6",
    width = "40vw",
    length = "10vw",
    top, 
    left,
    right,
    bottom,
    text = "pills"
}: PillProps) {
    return (
        <div
            className="absolute rounded-full pointer-events-none flex items-center justify-center text-black font-medium text-[1.5vw] h1"
            style={{
                width: width,
                height: length,
                top,
                left,
                right,
                bottom,
                background: `${color}`,
            }}>
            {text}
        </div>
    );
}

export default Pill;