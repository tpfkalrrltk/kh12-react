import { useState } from "react";
//function Exam03(){};
//const Exam03=function(){};
const Exam03 = () => {

    const [pay, setPay] = useState(0);
    return (
        <>


            <h1>출금 금액 :<input type="number" value={pay} size={5} placeholder="금액을 입력해주세요" min={0} />원</h1>
            <input type="range" className="w-50" min={0} max={10000000} step={10000} onChange={e => setPay(parseInt(e.target.value))} />
            <br />
            <button className="btn btn-lg btn-outline-primary me-1" onClick={() => setPay(100000 + pay)} >10만원</button>
            <button className="btn btn-lg btn-outline-secondary me-1" onClick={() => setPay(50000 + pay)}>5만원</button>
            <button className="btn btn-lg btn-primary me-1" onClick={() => setPay(10000 + pay)}>1만원</button>
            <button className="btn btn-lg btn-secondary" onClick={() => setPay(0)}>초기화</button>
        </>
    );
}
export default Exam03;