const SvgSuccess = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-green-600 w-28 h-28"
    style={{ width: '128px', height: '128px' }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SvgError = () => (
  <svg
    style={{ width: '128px', height: '128px' }}
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    className="w-28 h-28"
    viewBox="0 0 36 36"
  >
    <path
      fill="#c92727"
      d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6Zm-1.49 6a1.49 1.49 0 0 1 3 0v6.89a1.49 1.49 0 1 1-3 0ZM18 25.5a1.72 1.72 0 1 1 1.72-1.72A1.72 1.72 0 0 1 18 25.5Z"
      className="clr-i-solid clr-i-solid-path-1 "
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
);

export { SvgError, SvgSuccess };
