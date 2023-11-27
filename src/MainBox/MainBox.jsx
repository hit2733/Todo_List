import { useState, useEffect } from "react";
import Buttons from "../Components/Button/Buttons";
import Input from "../Components/Input/Input";
import List from "../List/List";
import SearchBar from "../SearchBar/SearchBar";

function MainBox() {
  const LS_TODO_KEY = "todo";

  const [InputValue, setInputValue] = useState("");
  const [Tasklist, setTasklist] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ButtonClickHandler = () => {
    if (InputValue.trim().length) {
      setTasklist([...Tasklist, { InputValue, isDone: false, Edit: false }]);
      setInputValue("");
    }
  };

  useEffect(() => {
    const StoredArray = JSON.parse(localStorage.getItem(LS_TODO_KEY)) || [];
    setTasklist(StoredArray);
  }, []);

  useEffect(
    () => localStorage.setItem(LS_TODO_KEY, JSON.stringify(Tasklist)),
    [Tasklist]
  );

  const SwapList = (initIndex, finalIndex) => {
    const items = [...Tasklist];
    const temp = items[initIndex];
    items[initIndex] = items[finalIndex];
    items[finalIndex] = temp;
    setTasklist(items);
  };

  const ButtonChanger = (index) => {
    const ButtonClicked = [...Tasklist];
    ButtonClicked[index].isDone = true;
    setTasklist(ButtonClicked);
  };

  const DeleteButton = (index) => {
    const ButtonClicked = [...Tasklist];
    ButtonClicked.splice(index, 1);
    setTasklist(ButtonClicked);
  };

  const EditButton = (index) => {
    const ButtonClicked = [...Tasklist];
    ButtonClicked[index].Edit = true;
    setTasklist(ButtonClicked);
  };

  const EditCancelButton = (index) => {
    const ButtonClicked = [...Tasklist];
    ButtonClicked[index].Edit = false;
    setTasklist(ButtonClicked);
  };

  const EditedInput = (index, data) => {
    const ButtonClicked = [...Tasklist];
    ButtonClicked[index].InputValue = data;
    setTasklist(ButtonClicked);
  };

  const DoneButtonClicked = (index) => {
    const ButtonClicked = [...Tasklist];
    ButtonClicked[index].Edit = false;
    setTasklist(ButtonClicked);
  };

  const ClearAllButton = () => {
    setTasklist([]);
  };

  const DeleteCompletedTasks = () => {
    const updatedTasks = Tasklist.filter((task) => !task.isDone);
    setTasklist(updatedTasks);
  };

  useEffect(() => {
    const filtered = Tasklist.filter((task) =>
      task.InputValue.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [Tasklist, searchText]);

  return (
    <>
      <div className="bg-gradient-to-r from-[#ffffff] to-[#81dff7]">
        <div className="grid grid-rows-1  grid-flow-col w-3/6 h-1/2 ml-80 mt-10">
          <Input
            ChangeHandler={(ChangedValue) => setInputValue(ChangedValue)}
            EmptyValue={InputValue}
            EnterHandler={ButtonClickHandler}
            ClassName="row-span-2 col-span-12 block w-full border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            rounded-tl-md"
            placeholder="Enter your new task here"
          />
          <Buttons
            Clicked={ButtonClickHandler}
            disabled={!InputValue.trim().length}
            label="ADD"
            className={
              InputValue.length
                ? "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-bl-md text-s col-span-12 row-span-1"
                : "bg-blue-300 text-white font-bold rounded-bl-md text-s col-span-12 row-span-1 cursor-not-allowed"
            }
          />
          <Buttons
            label="COMPLETED TASK"
            className={`${
              Tasklist.some((task) => task.isDone)
                ? "bg-green-500 hover-bg-green-700 text-white font-bold text-s"
                : "bg-green-300 text-white font-bold text-s cursor-not-allowed"
            } row-span-3 col-span-2 rounded-r-md`}
            Clicked={DeleteCompletedTasks}
            disabled={!Tasklist.some((task) => task.isDone)}
          />
        </div>
        <SearchBar
          searchText={searchText}
          onSearchChange={(text) => setSearchText(text)}
        />
        <Buttons
          label="CLEAR ALL"
          className={`bg-red-500 w-3/6 ml-80 text-white hover-bg-red-700 text-s font-bold rounded-md hover-bg-red-700 ${
            Tasklist.length === 0 ? "opacity-0" : ""
          }`}
          Clicked={ClearAllButton}
          disabled={Tasklist.length === 0}
        />
        <List
          Tasklist={searchText ? filteredTasks : Tasklist}
          ButtonChanger={ButtonChanger}
          SwapList={SwapList}
          DeleteButton={DeleteButton}
          EditButton={EditButton}
          EditCancelButton={EditCancelButton}
          EditedInput={EditedInput}
          DoneButtonClicked={DoneButtonClicked}
        />
      </div>
    </>
  );
}

export default MainBox;
