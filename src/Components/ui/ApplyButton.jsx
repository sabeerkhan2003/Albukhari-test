import clsx from "clsx";

const ApplyNowButton = ({ 
  name = "Apply Now", 
  bgColor = "blue-400", 
  textColor = "white",
  className 
}) => {
  return (
    <button
      className={clsx(
        "relative px-4 py-2 border lg:px-6 lg:py-3 font-semibold text-lg rounded-full shadow-lg overflow-hidden group transition-all duration-300 ease-out hover:bg-opacity-20",
        `hover:bg-${bgColor}`,
        textColor ? `text-${textColor}` : "text-white",
        className 
      )}
    >
      <span className="absolute inset-0 scale-x-0 bg-white bg-opacity-10 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      <span
        className={clsx(
          "relative block transition-transform duration-500 ease-in-out group-hover:translate-x-2",
          textColor ? `text-${textColor}` : "text-white"
        )}
      >
        {name}
      </span>
    </button>
  );
};

export default ApplyNowButton;