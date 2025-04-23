type HexagonProps = {
    width?: number;
    color?: string;
  };

const Hexagon = ({ width = 10, color = "red" }: HexagonProps) => {
    return (
        <div style={{backgroundColor: color, }} className="relative rotate-45 size-calc(width/2)]">
        👋 Hello from &lt;ThisThing /&gt;!
        </div>
    );
};

export default Hexagon;
