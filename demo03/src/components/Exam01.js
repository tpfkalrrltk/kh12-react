import { useState } from "react"; //react 모듈중에서 useState만 골라서 불러오겠다.

function Exam01() {
    //데이터
    // - const는 값이 변하지 않는 변수를 의미
    // - React는 화면을 자동으로 갱신해주기 때문에 불변값이 아니면 처리를 안해준다.
    // - 변경은 setter메소드로 처리하도록 설정되어있다.
    // - 변수를 선언할때 setter 메소드까지 같이 만들도록 useState라는 명령을 제공한다.

    const [number, setNumber] = useState(20);
    // - > number라는 상태변수를 10으로 만들고 변경은 setNumber함수로만 가능하도록 하겠다.

    function plus() {
        setNumber(number + 1)
       
    }
    function minus() {
        setNumber(number - 1)
       
    }

    return (
        <>
            <h1>첫 번째 예제</h1>
            {/* 데이터를 출력  컨트롤 / 같이누르기*/}
            <h2>number={number}</h2>
            {/* class를 부여할땐 class가 아니라 className이라고 적어야함 */}
            <button className="btn btn-primary" onClick={plus}>+</button>
            <button className="btn btn-primary ms-2" onClick={minus}>-</button>
        </>
    )

}
export default Exam01;