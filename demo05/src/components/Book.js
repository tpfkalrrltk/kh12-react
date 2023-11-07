import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { LiaEdit } from "react-icons/lia"
import { AiFillDelete } from "react-icons/ai"

import "./Book.css"
import { Modal } from "bootstrap"

const Book = (props) => {
    const [BookList, setBookList] = useState([]);

    // const reloadBook = () => {
    //     axios({
    //         url: "${process.env.REACT_APP_REST_API_URL}/book/",
    //         method: "get"
    //     }).then(response => {
    //         //  window.alert(" 목록 불러오기가 성공했습니다.")
    //         setBookList(response.data);
    //     }).catch(error => { window.alert("통신 오류 발생") });
    // }
    const reloadBook = async () => {
        const response = await axios({
            url: `${process.env.REACT_APP_REST_API_URL}/book/`,
            method: "get"

        })
        //window.alert(" 목록 불러오기가 성공했습니다.")
        setBookList(response.data);
    }



    useEffect(() => {
        //서버에 있는 도서 정보를 불러와서 state에 반영하는 코드
        reloadBook();
    }, []);

    const deleteBook = (Book) => {
        const check = window.confirm("삭제할 겁니까?");
        if (check == false) { return }

        axios({
            url: `${process.env.REACT_APP_REST_API_URL}/book/${Book.bookId}`,
            // url: "${process.env.REACT_APP_REST_API_URL}/book/"+Book.bookId,
            method: "delete"
        }).then(response => {
            reloadBook();
        }).catch(error => {

        })
    }
    // 모달
    const bsModal = useRef();
    const openModal = () => {
        const modal = new Modal(bsModal.current);
        modal.show();
    };
    const closeModal = () => {
        const modal = Modal.getInstance(bsModal.current);
        modal.hide();
        clearBook();
    };
    //등록 
    const [book, setBook] = useState({
        bookTitle: "",
        bookPublisher: "",
        bookPublicationDate: "",
        bookPrice: 0,
        bookPageCount: 0,
        bookGenre: "",
        bookAuthor: ""
    })
    const changeBook = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    };
    const clearBook = () => {
        setBook({
            bookTitle: "",
            bookPublisher: "",
            bookPublicationDate: "",
            bookPrice: 0,
            bookPageCount: 0,
            bookGenre: "",
            bookAuthor: ""
        })
    }
    // const addBook = () => {
    //     axios({
    //         url: "${process.env.REACT_APP_REST_API_URL}/book/",
    //         method: "post",
    //         data:book
    //         //data:{...book} 이것도 가능

    //     }).then(response => {
    //         reloadBook();
    //         closeModal();

    //     }).catch(error => {

    //     });
    // }

    //async함수와 await 키워드를 사용한 간소화 작업이 가능
    // - 비동기 작업을 동기화된 코드로 작성할 수 있다.
    const addBook = async () => {
        const response = await axios({
            url: `${process.env.REACT_APP_REST_API_URL}/book/`,
            method: "post",
            data: book
        });
        reloadBook();
        closeModal();

    };

    //수정 정보넣기
    const editBook = (target) => {
        setBook({ ...target })
        openModal();
    }
    //수정
    const updateBook = () => {
     
        const copyBook={...book};
        delete copyBook.bookId;
        axios({

            url:`${process.env.REACT_APP_REST_API_URL}/book/${book.bookId}`,
            method: "put",
            data: {...book}
        })
            .then(response => {
                reloadBook();
                closeModal();
            })
            .catch(error => {

            });
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col offset-1">
                    <h1>도서 관리화면</h1>
                    <p>리액트 예제</p>
                </div>
            </div>
            <div className="row">
                <div className="col offset-1">
                    <button className="btn btn-success" onClick={openModal} >도서 추가</button>
                </div>
            </div>

            <div className="row">
                <div className="col -12">
                    <table className="table my-4">
                        <thead>
                            <tr>
                                <th className="pc-only">넘버</th>
                                <th>제목</th>
                                <th>글쓴이</th>
                                <th>출판사</th>
                                <th>가격</th>
                                <th className="pc-only">출판일</th>
                                <th className="pc-only">페이지수</th>
                                <th className="pc-only">장르</th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {BookList.map((Book, index) => (
                                <tr key={Book.bookId}>
                                    <td className="pc-only">{Book.bookId}</td>
                                    <td>{Book.bookTitle}</td>
                                    <td>{Book.bookAuthor}</td>
                                    <td>{Book.bookPublisher}</td>
                                    <td>{Book.bookPrice}</td>
                                    <td className="pc-only">{Book.bookPublicationDate}</td>
                                    <td className="pc-only">{Book.bookPageCount}</td>
                                    <td className="pc-only">{Book.bookGenre}</td>
                                    {/* 아이콘자리 */}
                                    <td> <LiaEdit className="text-warning" onClick={e => editBook(Book)} /></td>
                                    <td><AiFillDelete className="text-danger" onClick={e => deleteBook(Book)} /></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>

            {/* Modal */}
            <div className="modal fade" ref={bsModal} id="exampleModal" tabIndex="-1"
                data-bs-backdrop="static"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {book.bookId === undefined ? "책 등록" : `${book.bookId}번 책 수정`}
                            </h5>
                            <button type="button" className="btn-close border-0 bg-transparent" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body container">
                            {/* 수정화면 */}
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">책 제목</label>
                                    <input type="text" name="bookTitle" className="form-control" value={book.bookTitle} onChange={changeBook} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label className="form-label">글쓴이</label>
                                    <input type="text" name="bookAuthor" className="form-control" value={book.bookAuthor} onChange={changeBook} />  </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label className="form-label">출판사</label>
                                    <input type="text" name="bookPublisher" className="form-control" value={book.bookPublisher} onChange={changeBook} />  </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label className="form-label">가격</label>
                                    <input type="number" name="bookPrice" className="form-control" value={book.bookPrice} onChange={changeBook} />  </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label className="form-label">출판일</label>
                                    <input type="date" name="bookPublicationDate" className="form-control" value={book.bookPublicationDate} onChange={changeBook} />  </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label className="form-label">페이지수</label>
                                    <input type="number" name="bookPageCount" className="form-control" value={book.bookPageCount} onChange={changeBook} />  </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label className="form-label">장르</label>
                                    <select type="text" name="bookGenre" className="form-control" value={book.bookGenre} onChange={changeBook} >
                                        <option value="">==선택==</option>
                                        <option value="판타지">판타지</option>
                                        <option value="수기">수기</option>
                                        <option value="소설">소설</option>
                                        <option value="자기개발">자기개발</option>
                                    </select></div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            {/*  자동으로 닫히는 버튼 */}
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button> */}
                            {/*  수동으로 닫히는 버튼 */}

                            {book.bookId === undefined ?
                                <button className="btn btn-primary" onClick={addBook}>추가 </button>
                                :
                                <button className="btn btn-success" onClick={updateBook} >수정</button>
                            }
                            <button className="btn btn-secondary" onClick={closeModal}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}
export default Book