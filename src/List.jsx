
export default function List(props) {
    const {list, handleRemove, handleDone} = props 
    
    return (
        <div className="flex flex-col list">
        {list.map( (item, index) => {
          item.key = index
          return (
            <div className="font-open font-bold flex mt-4 justify-between"> 

              <div className="font-bold max-w-sm overflow truncate">{item.title} </div>

              <div className="flex">

                <button 
                  style={{ backgroundColor: item.done ? "#29be4b" : "gray" }}
                  className="bg-gray-400 text-white ml-4 mr-4 rounded-md text-center pl-2 pr-2 w-24" 
                  onClick={() => handleDone(item.key, item.done)}
                > {item.done ? "Done" : "Not done"} </button>
              
                <button 
                  className="bg-red-500 text-white min-h-full rounded-md pl-2 pr-2 pt-1 pb-1 text-center" 
                  onClick={() => handleRemove(item.key)}>
                    Remove
                </button>
              </div>
              
            </div>
            
          )
            })}
        </div>
    )
}




{/* <div className="flex flex-col list">
        {list.map( (item, index) => {
          item.key = index

          return (
            <div className="font-open font-bold flex mt-4 justify-between"> 

              <div className="font-bold max-w-sm overflow truncate">{item.title} </div>

              <div className="flex">

                <button 
                  style={{ backgroundColor: item.done ? "#29be4b" : "gray" }}
                  className="bg-gray-400 text-white ml-4 mr-4 rounded-md text-center pl-2 pr-2 w-24" 
                  onClick={() => handleDone(item.key, item.done)}
                > {item.done ? "Done" : "Not done"} </button>
              
                <button 
                  className="bg-red-800 text-white min-h-full rounded-md pl-2 pr-2 pt-1 pb-1 text-center" 
                  onClick={() => handleRemove(item.key)}>
                    Remove
                </button>
              </div>
              
            </div>
            
          )
        })}
</div> */}