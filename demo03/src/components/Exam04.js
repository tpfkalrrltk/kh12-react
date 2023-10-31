import { useEffect, useState } from "react";

const Exam04 = () => {
    //const[필드명, 세터메소드명] =useStrate(초기값);
    const [text, setText] = useState("");
    const [length, setLength] = useState(0);

    //state끼리 의존성이 생기는 경우가 있다.
    // - text가 변하면 length가 변해야한다
    // - 수동으로 하는것이 아니라 자동으로 변하도록 설정할수 있다.
    // - useEffect 훅 사용
    // - useEffect(함수,[감지항목]);
    useEffect(()=>{setLength(text.length)}, [text]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-1">
                        <h1>(Q) 주말에 뭐하세요?</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-9 offset-1">
                        {/* <textarea className="form-control"  value={} cols={100} rows={20} onInput={(e) => setText(e.target.textLength)} */}
                        <textarea className="form-control" value={text} cols={50} rows={20} onInput={(e) => { setText(e.target.value) }}
                        ></textarea>
                    </div>
                </div>


                <div className="row mt-2">
                    <div className="col-10 text-end">
                        <h3> {length}/1000</h3>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-9 offset-1">
                        <button className="w-100 btn-lg btn btn-primary">저장</button>
                    </div>
                </div>

            </div>
        </>
    );

}
export default Exam04