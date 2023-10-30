import { useState } from 'react';
import tomImage from '../assets/image/Tom.gif';

function Exam02() {
    //이 화면의 상태는(state)는 한개이다.
    const [size, setSize] = useState(200);

    // function small() {
    //     // size =100;//react사용불가
    //     setSize(100);//react스러운 방법
    // }
    // function normal() {
    //     setSize(200);
    // }
    // function big() {
    //     setSize(300);
    // }

    return (
        <>
            <h2>두 번째 예제</h2>
            <button className='btn btn-secondary' onClick={function(){setSize(100)}}>작게</button>
            {/* 람다(애로우 펑션)을 이용해서 onClick이벤트를 간소화할수있다. */}
            <button className='btn btn-secondary ms-3' onClick={()=>setSize(200)}>기본</button>
            <button className='btn btn-secondary ms-3' onClick={()=>{setSize(300)}}>크게</button>
            <br />
            <img src={tomImage} width={size} height={size}  />
        </>
    );
}
export default Exam02;