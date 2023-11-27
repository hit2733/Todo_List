// eslint-disable-next-line react/prop-types
function Buttons({ label, className, Clicked, disabled, EnterHandler }) {
  return (
    <button
      className={className}
      onClick={Clicked}
      disabled={disabled}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          EnterHandler();
        }
      }}
    >
      {label}
    </button>
  );
}

export default Buttons;
