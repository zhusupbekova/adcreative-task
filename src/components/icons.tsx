export const DownIcon = ({
  color = "#475569",
  size = 12,
  className,
}: {
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -0.5 17 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M10.106,12.69 C9.525,13.27 8.584,13.27 8.002,12.69 L1.561,6.246 C0.979,5.665 0.722,4.143 2.561,4.143 L15.549,4.143 C17.45,4.143 17.131,5.664 16.549,6.246 L10.106,12.69 L10.106,12.69 Z"
          fill={color}
        ></path>
      </g>
    </svg>
  );
};

export const CloseIcon = ({
  color = "#94a3b8",
  size = 24,
  className,
}: {
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Zm11.55 4.05a1 1 0 0 1 0 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414 8.464 16.95a1 1 0 1 1-1.414-1.414L10.586 12 7.05 8.464A1 1 0 1 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 0 1 1.414 0Z"
        fill={color}
      />
    </svg>
  );
};
