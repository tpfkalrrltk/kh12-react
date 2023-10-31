import { useEffect, useState } from "react";


const Exam05 = () => {
    //state를 3개로 보면 =(java, data, spring)
    //state를 5개로 보면 =(java, data, spring) => (total,avg)
    const [java, setJava] = useState(0);
    const [data, setData] = useState(0);
    const [spring, setSpring] = useState(0);

    const [total, setTotal] = useState(0);
    const [avg, setAvg] = useState(0);

    useEffect(() => {
        setTotal(java + data + spring);
    }, [java, data, spring]);
    useEffect(() => { setAvg(total / 3) }, [total]);

    // function total(java, data, spring) {
    //     return (java + data + spring);
    // }
    // function avg(java, data, spring) {
    //     return (java + data + spring) / 3;
    // }

    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col offset-4">
                    <h1>성적계산기</h1>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3 offset-3">
                    <h3>자바</h3>
                </div>
                <div className="col-6">
                    <input type="number" className="form-control w-50" min={0} max={100} onChange={(e) => setJava(parseInt(e.target.value))}></input>점
                </div>

            </div>
            <div className="row">
                <div className="col-3 offset-3">
                    <h3>데이터베이스</h3>
                </div>
                <div className="col-3">
                    <input type="number" min={0} max={100} onChange={(e) => setData(parseInt(e.target.value))}></input>점
                </div>

            </div>
            <div className="row">
                <div className="col-3 offset-3">
                    <h3>스프링부트</h3>
                </div>
                <div className="col-3">
                    <input type="number" min={0} max={100} onChange={(e) => setSpring(parseInt(e.target.value))}></input>점
                </div>

            </div>
            <div className="row mt-4">
                <div className="col-3 offset-4">
                    <h3>
                        총점 :  {total}점
                        <br></br>
                        평균 :  {avg}점
                    </h3>
                </div>
            </div>



        </div>
    </>);
}
export default Exam05;