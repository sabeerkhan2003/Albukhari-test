import clsx from "clsx";

const ApplyNowButton = ({ name = "Apply Now", bgColor = "blue-400", textColor = "white" }) => {
  return (
    <button
      className={clsx(
        "relative px-2 py-1 border lg:px-6 lg:py-3 lg:rounded-2xl font-semibold text-lg rounded-lg shadow-lg overflow-hidden group transition-all duration-300 ease-out hover:bg-opacity-20",
        `hover:bg-${bgColor}`,
        `text-${textColor}`
      )}
    >
      {/* Background Hover Effect */}
      <span className="absolute inset-0 scale-x-0 bg-white bg-opacity-10 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

      {/* Dynamic Text */}
      <span
        className={clsx(
          "relative block transition-transform duration-500 ease-in-out group-hover:translate-x-2",
          `text-${textColor}`
        )}
      >
        {name}
      </span>
    </button>
  );
};

export default ApplyNowButton;
