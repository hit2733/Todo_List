// eslint-disable-next-line react/prop-types
function Input({
  // eslint-disable-next-line react/prop-types
  ChangeHandler,
  // eslint-disable-next-line react/prop-types
  EmptyValue,
  // eslint-disable-next-line react/prop-types
  EnterHandler,
  // eslint-disable-next-line react/prop-types
  ClassName,
  // eslint-disable-next-line react/prop-types
  placeholder,
}) {
  return (
    <input
      className={ClassName}
      placeholder={placeholder}
      onChange={(e) => ChangeHandler(e.target.value)}
      value={EmptyValue}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          EnterHandler();
        }
      }}
    ></input>
  );
}

export default Input;
