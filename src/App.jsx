import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list1 = [{ title: "Item 1", check: false }, { title: "Item 2", check: false }, { title: "Item 3", check: false }]
const list2 = [{ title: "Item A", check: false }, { title: "Item B", check: false }, { title: "Item C", check: false }]
function App() {
  const [listData1, setListData1] = useState(list1)
  const [listData2, setListData2] = useState(list2)

  const handleCheckBox = (id) => {
    let updatedlist = [...list1]
    updatedlist[id].check = !updatedlist[id].check
    setListData1(updatedlist)
  }

  const handelSwap = ()=>{
    let temp
    let updatedlist1 = [...list1]
    let updatedlist2 = [...list2]
    updatedlist1.forEach((item,i)=>{
      if(item.check){
        temp = updatedlist1[i].title
        updatedlist1[i].title = updatedlist2[i].title
        updatedlist2[i].title = temp
      }
      updatedlist1[i].check = false
    })
    setListData1(updatedlist1)
    setListData2(updatedlist2)
  }
  console.log(listData1)
  return (
    <>
      <h2>List1</h2>
      <ul>
        {listData1.map((item, id) => (
          <>
            <li key={id}><input type="checkbox" checked={item.check} onChange={() => handleCheckBox(id)} />{item.title}</li>
          </>
        ))}
      </ul>
      <ul>
        {listData2.map((item) => (
          <>
            <li>{item.title}</li>
          </>
        ))}
      </ul>
      <button onClick={handelSwap}>Swap List</button>
    </>
  )
}

export default App
