import Buttons from "../Components/Button/Buttons";
import Input from "../Components/Input/Input";

function List({
  Tasklist,
  ButtonChanger,
  SwapList,
  DeleteButton,
  EditButton,
  EditCancelButton,
  EditedInput,
  DoneButtonClicked,
}) {
  const ListItems = Tasklist.map((Task, index) => (
    <li key={index}>
      <div
        className={
          Task.isDone
            ? "border-2 border-[#4CA0FD] w-3/6 ml-80 mt-2 rounded-sm flex justify-around px-2 font-bold h-10 text-2xl pb-2 bg-green-500 "
            : "border-2 border-[#4CA0FD] w-3/6 ml-80 mt-2 rounded-sm flex justify-around px-2 font-bold h-10 text-2xl pb-2 bg-gray-100"
        }
      >
        {!Task.Edit && (
          <span
            style={{ textDecoration: Task.isDone ? "line-through" : "none" }}
          >
            {Task.InputValue}
          </span>
        )}
        {Task.Edit ? (
          <>
            <Input
              ChangeHandler={(data) => {
                EditedInput(index, data);
              }}
              EmptyValue={Task.InputValue}
              ClassName="font-normal  mt-2 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-1.5"
              placeholder="Edit your task here"
              EnterHandler={() => DoneButtonClicked(index)}
            />
            <Buttons
              className="hover:opacity-30"
              label="✔️"
              Clicked={() => DoneButtonClicked(index)}
            />
            <Buttons
              className="hover:opacity-30"
              label="❌"
              Clicked={() => EditCancelButton(index)}
            />
          </>
        ) : (
          <Buttons
            className={Task.isDone ? "opacity-0" : "hover:opacity-30"}
            label="🖊️"
            Clicked={() => {
              EditButton(index);
            }}
            disabled={Task.isDone}
          />
        )}
        <Buttons
          className={index === 0 ? "opacity-0" : "hover:opacity-30"}
          label="🔼"
          Clicked={() => SwapList(index, index - 1)}
          disabled={index === 0}
        />
        <Buttons
          className={
            index === Tasklist.length - 1 ? "opacity-0" : "hover:opacity-30"
          }
          label="🔽"
          Clicked={() => SwapList(index, index + 1)}
          disabled={index === Tasklist.length - 1}
        />

        {Task.isDone ? (
          <Buttons
            className="hover:opacity-30"
            label="❌"
            Clicked={() => DeleteButton(index)}
          />
        ) : (
          <Buttons
            className={Task.Edit ? "opacity-0" : "hover:opacity-30"}
            label="✔️"
            Clicked={() => ButtonChanger(index)}
            disabled={Task.Edit}
          />
        )}
      </div>
    </li>
  ));

  return <ul>{ListItems}</ul>;
}

export default List;
