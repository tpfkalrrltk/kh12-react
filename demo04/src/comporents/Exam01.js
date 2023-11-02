import { useState } from "react"
const Exam01 = () => {

    const [todoList, setTodoList] = useState([
        { no: 1, title: "학원가기", type: "공부", edit: false },
        { no: 2, title: "영어단어외우기", type: "공부", edit: false },
        { no: 3, title: "헬스장가기", type: "운동", edit: false },
        { no: 4, title: "친구만나기", type: "일상", edit: false }
    ]);
    const [data, setData] = useState({
        title: "",
        type: ""
    })
    const [backup, setBackup] = useState([])
    //수정 전화
    const editTodo = (target) => {
        console.log(target);
        const newTodoList = todoList.map(todoDto => {
            if (todoDto.no === target.no) {
                return {
                    ...todoDto,
                    edit: true
                };
            }
            console.log(todoDto);
            return todoDto;

        });


        setTodoList(newTodoList);
    }
    //수정 값전달
    const changeTodo = (target, e) => {

        const newTodoList = todoList.map(todoDto => {
            if (todoDto.no === target.no) {
                return {
                    ...todoDto,
                    [e.target.name]: e.target.value
                }
            }
            return todoDto;
        });
        setTodoList(newTodoList);
    };
    // 수정완료
    const saveTodo = (target) => {



        const newTodoList = todoList.map(todoDto => {
            if (todoDto.no === target.no) {
                return {
                    ...todoDto,
                    edit: false
                }
            }
            return todoDto
        });
        setTodoList(newTodoList);
    };
    // 수정취소
    const cancelTodo = (target) => {
        const newTodoList = todoList.map(todoDto => {
            if (todoDto.no === target.no) {
                return {
                    ...todoDto,
                    edit: false
                }
            }
            return todoDto
        })
        setTodoList(newTodoList);
    }

    return (
        <div className="container" key={todoList.no}>
            <div className="row">
                <div className="col-10 offset-1 text-center mt-5 mb-2 bg-black text-light rounded">
                    <h1>계획표</h1>
                </div>
                <div className="row">
                    <div className="col-2 offset-7">
                        <button className="w-100 btn btn-primary mb-2">추가</button>
                    </div>
                </div>

            </div>

            <table className="table table-hover text-center">

                <tr className="col table-primary" >
                    <div className="row  text-center" >
                        <th className="col-1 offset-2">넘버</th>

                        <th className="col-3">제목</th>

                        <th className="col-2">타입</th>
                        <th className="col-2">항목버튼</th>

                    </div>
                </tr>

                {todoList.map((todoDto) => (
                    todoDto.edit ?
                        (

                            <tr className="col table-secondary">
                                <div className="row  text-center">
                                    <input className="col-1 offset-2" value={todoDto.no} name="no" onChange={e => changeTodo(todoDto, e)} />
                                    <input className="col-3" value={todoDto.title} name="title" onChange={e => changeTodo(todoDto, e)} />
                                    <input className="col-2" value={todoDto.type} name="type" onChange={e => changeTodo(todoDto, e)} />

                                    <td className="col-1"><button className="btn btn-primary" onClick={e => cancelTodo(todoDto)}>취소</button></td>
                                    <td className="col-1"><button className="btn btn-danger"> onClick={e => saveTodo(todoDto)} 완료</button></td>

                                </div>
                            </tr>
                        ) :
                        (

                            <tr className="col table-secondary">
                                <div className="row  text-center">
                                    <td className="col-1 offset-2">{todoDto.no}</td>
                                    <td className="col-3">{todoDto.title}</td>
                                    <td className="col-2">{todoDto.type}</td>
                                    <td className="col-1"><button className="btn btn-success" onClick={e => editTodo(todoDto)}>수정</button></td>
                                    <td className="col-1"><button className="btn btn-danger">삭제</button></td>

                                </div>
                            </tr>
                        )


                ))}


            </table>







        </div >


    )

}
export default Exam01