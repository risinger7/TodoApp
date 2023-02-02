
import { useState } from "react"
import Button from "./Button"
import List from "./List"

function App() {

  const [inputText, setInputText] = useState("")
  const [list, setList] = useState([])
  
  function handleText(e){
    setInputText(e.target.value)
  }

  function handleAdd() {

    if(inputText === "") {
      return
    }

    const newList = [...list]
    const newObject = {
      title: inputText,
      done: false,
    }

    newList.push(newObject)
    setList(newList)
    setInputText("") // when clicking, removes the text in the input box
  }

  function handleRemove(key) {
    const newList = [...list]
    newList.splice(key, 1)
    setList(newList)
  }

  function handleDone(key, done) {
    const newList = [...list]

    for(let i=0; i<newList.length; i++) {
      const item = newList[i]

      if(item.key == key) {
        item.done = !done // set opposite of what it is
      }
    }
    setList(newList)
  }

  return (

  <div className="flex flex-col items-center" >
    <h1 className="m-8 font-fugaz text-2xl">TODO APP</h1>

    <div className="rounded-lg flex flex-col align-center w-96 h-fit"> 
      <div className="flex justify-between rounded-lg mb-6">
        <input size="25" className="bg-blue-200 font-open text-black rounded-lg mr-2 pl-2 pr-2" type="text" value={inputText} onChange={handleText} />
        <Button title="Add" theme="theme1" onClick={handleAdd} />
      </div>

      <List list={list} handleRemove={handleRemove} handleDone={handleDone}/>
    </div>  
  </div>
  )
}

export default App
