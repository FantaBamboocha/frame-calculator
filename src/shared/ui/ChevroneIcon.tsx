interface ChevronIconProps {
  direction: "up" | "down" | "right" | "left";
  className?: string;
}

export const ChevronIcon = ({ direction, className }: ChevronIconProps) => {
  const rotationMap = {
    down: "rotate(0deg)",
    up: "rotate(180deg)",
    right: "rotate(-90deg)",
    left: "rotate(90deg)",
  };
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: rotationMap[direction],
        transition: "transform 0.2s ease-in-out",
      }}
      className={className}
    >
      <path
        d="M1 1L9 9L17 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
