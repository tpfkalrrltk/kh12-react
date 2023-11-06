import { useEffect, useState } from "react";
import axios from "axios";

const Pocketmon = (props) => {
    const [pocketmonList, setpocketmonList] = useState([]);
    useEffect(() => {
        //서버에서 pocketmon list를 불러와서 state에 설정하는 코드
        axios({
            url: "http://localhost:8080/pocketmon/",
            method: "get",

        })
            .then(response => {
                // console.log(response);
                setpocketmonList(response.data);
            })
            .catch(err => { });
    }, []);

    return (
        <div className="container">

            <div className="row">
                <div className="col">
                    <h1>포켓몬 관리 화면</h1>
                    <p>React CRUD 연습 예제</p>
                </div>
            </div>


            <div className="row mt-4">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>타입</th>

                            </tr>
                        </thead>

                        <tbody>

                            {pocketmonList.map(pocketmon => (
                                <tr key={pocketmon.no}>
                                    <td>{pocketmon.no}</td>
                                    <td>{pocketmon.name}</td>
                                    <td>{pocketmon.type}</td>
                                </tr>

                            ))}

                        </tbody>


                    </table>
                </div>
            </div>




            {pocketmonList.map(pocketmon => {
                <tr key={pocketmon.no}>
                    <td>{pocketmon.no}</td>
                    <td>{pocketmon.name}</td>
                    <td>{pocketmon.type}</td>
                </tr>

            })}



        </div >
    );
};
export default Pocketmon