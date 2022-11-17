import { useEffect, useState } from 'react'

//Side effects

function Content() {
    // 1.useEffect (callback)
    // Gọi callback mỗi khi component re-render
    // Gọi callback sau khi component thêm element vào DOM
    // 2.useEffect (callback, [])
    // 3.useEffect (callback, [deps])

    // ---------------------------------
    //1. callback luôn được gọi sau khi component mounted

    const [title,setTitle] = useState('') 

    useEffect(() => {
        document.title = title
    })
    
    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
          
        </div>
    )
}

export default Content