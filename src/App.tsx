import { arrayMoveImmutable } from 'array-move'
import React, { useCallback, useRef, useState } from 'react'
import './scss/main.scss'
import SortableList, { SortableItem } from './sort-list'

function App() {

  const holderRef = useRef<HTMLDivElement>(null)
  const [ items, setItems ] = useState(['a', 'b', 'c', 'd', 'e', 'f'])

  const onSortEnd = useCallback((from: number, to: number) => {

    const newItems = arrayMoveImmutable(items, from, to)
    setItems(newItems)
  }, [])
  
  return (
    <div id="app">
      <div ref={holderRef} className="holder" />
      <SortableList
        onSortEnd={onSortEnd}
        className="list"
        draggedItemClassName="dragged"
        customHolderRef={holderRef}
      >
        {items.map(it => {
          return (
            <SortableItem key={it}>
              <div className='item'>
                <div className="wrap">
                  <img src="https://picsum.photos/200/150" />
                  <div>{it}</div>
                </div>
              </div>
            </SortableItem>
          )
        })}
      </SortableList>

    </div>
  );
}

export default App;
