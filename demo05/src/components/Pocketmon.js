import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { LiaEdit } from "react-icons/lia"
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai"
import { Modal } from "bootstrap";

const Pocketmon = (props) => {
    const [pocketmonList, setpocketmonList] = useState([]);

    //서버에서 pocketmon list를 불러와서 state에 설정하는 코드
    const loadPocketmon = () => {
        axios({
            url: `${process.env.REACT_APP_REST_API_URL}/pocketmon/`,
            method: "get",

        })
            .then(response => {
                // console.log(response);
                setpocketmonList(response.data);
            })
            .catch(err => { });
    };


    useEffect(() => {
        loadPocketmon();
    }, []);


    //포켓몬스터 삭제
    // - 이제는 state에서 삭제하는 것이 아니라 서버에서 통신을 보낸 뒤 목록을 갱신하면 된다.
    const deletePocketmon = (pocketmon) => {
        const choice = window.confirm("정말 삭제하시겠습니까?");
        if (choice === false) return;

        //axios({옵션}).then(성공시 실행할 함수).catch(실패시 실행할 함수);
        axios({
            url: `${process.env.REACT_APP_REST_API_URL}/pocketmon/${pocketmon.no}`,
            method: "delete"
        })
            .then(response => {
                loadPocketmon();//목록갱신
            })
            .catch(error => { });

    };

    //modal 관련된 처리
    const bsModal = useRef();
    const openModal = () => {
        const modal = new Modal(bsModal.current);
        modal.show();
    };
    const closeModal = () => {
        const modal = Modal.getInstance(bsModal.current);
        modal.hide();
        clearPocketmon();
    };

    //등록과 관련된 state
    const [pocketmon, setPocketmon] = useState({
        name: "",
        type: "",
    });
    const changePocketmon = (e) => {
        setPocketmon({
            ...pocketmon,
            [e.target.name]: e.target.value
        });

    };
    const clearPocketmon = () => {
        setPocketmon({ name: "", type: "" })
    }

    //axios로 서버에 등록 요청을 보낸 뒤 등록이  성공하면 목록을 갱신하도록 처리
    const savePoketmon = () => {
        //입력값 검사 후 차단 코드 추가

        axios({
            url: `${process.env.REACT_APP_REST_API_URL}/pocketmon/`,
            method: "post",
            data: pocketmon
        })
            .then(response => { //성공했다면
                loadPocketmon();//목록을 갱신하고
                closeModal();//모달을 닫아라
            })
            .catch(error => { });

    }
    //포켓몬 수정 창 열기
    // - target은 수정 버튼을 누른 행의 포켓몬스터 정보
    // - target의 정보를 pocketmon으로 카피 후 모달열기
    const editPocketmon = (target) => {
        setPocketmon({ ...target })
        openModal();

    }

    //포켓몬 수정 처리
    const updatePocketmon = () => {
        //검사 후 차단 처리

        const { no, name, type } = pocketmon;
        axios({
            url: `${process.env.REACT_APP_REST_API_URL}/pocketmon/${no}`,
            method: "put",
            data: {
                name: name,
                type: type
            }

        })
            .then(response => {
                loadPocketmon();
                closeModal();
            })
            .catch(err => { });

    }

    return (
        <div className="container">

            <div className="row">
                <div className="col">
                    <h1>포켓몬 관리 화면</h1>
                    <p>React CRUD 연습 예제</p>
                </div>
            </div>
            {/* 추가버튼 */}
            <div className="row mt-4">
                <div className="col  text-end">
                    <button className="btn btn-success" onClick={openModal}><AiOutlinePlus />추가</button>
                </div>
            </div>


            {/* 출력 위치 */}
            <div className="row mt-4">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>타입</th>
                                <th></th>

                            </tr>
                        </thead>

                        <tbody>

                            {pocketmonList.map(pocketmon => (
                                <tr key={pocketmon.no}>
                                    <td>{pocketmon.no}</td>
                                    <td>{pocketmon.name}</td>
                                    <td>{pocketmon.type}</td>
                                    {/* 아이콘자리 */}
                                    <td> <LiaEdit className="text-warning"
                                        onClick={e => editPocketmon(pocketmon)} />
                                        <AiFillDelete className="text-danger"
                                            onClick={e => deletePocketmon(pocketmon)} /></td>
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



            {/* Modal */}
            <div className="modal fade" ref={bsModal} id="exampleModal" tabIndex="-1"
                data-bs-backdrop="static"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {pocketmon.no === undefined ? "포켓몬 추가" : `${pocketmon.no}번 포켓몬 수정`}
                            </h5>
                            <button type="button" className="btn-close border-0 bg-transparent" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body container">
                            {/* 수정화면 */}
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">이름</label>
                                    <input type="text" name="name" className="form-control" value={pocketmon.name} onChange={changePocketmon} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label className="form-label">속성</label>
                                    <input type="text" name="type" className="form-control" value={pocketmon.type} onChange={changePocketmon} />  </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            {/*  자동으로 닫히는 버튼 */}
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button> */}
                            {/*  수동으로 닫히는 버튼 */}
                            {pocketmon.no === undefined ?
                                <button className="btn btn-primary" onClick={savePoketmon}>저장</button> 
                                :
                                <button className="btn btn-success" onClick={updatePocketmon}>수정</button>
                            }
                            <button className="btn btn-secondary" onClick={closeModal}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>




        </div >
    );
};
export default Pocketmon