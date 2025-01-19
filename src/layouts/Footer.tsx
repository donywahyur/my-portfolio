export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="py-4 mb-5 ">
      <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="iconify iconify--si"
          >
            <g fill="none">
              <path
                fill="currentColor"
                fillOpacity=".16"
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"
              ></path>
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.23 13.697C14.974 15.095 13.767 16 12.142 16c-2.076 0-3.373-1.535-3.373-3.992v-.01C8.77 9.534 10.062 8 12.137 8c1.61 0 2.865 1.011 3.092 2.478M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10Z"
              ></path>
            </g>
          </svg>{" "}
          <span>{year}</span> <span>Dony Wahyu Ramadhan</span>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
