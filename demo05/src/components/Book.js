import axios from "axios"
import { useEffect, useState } from "react"

import "./Book.css"

const Book = (props) => {
    const [BookList, setBookList] = useState([]);

    useEffect(() => {
        //서버에 있는 도서 정보를 불러와서 state에 반영하는 코드

        axios({
            url: "http://localhost:8080/book/",
            method: "get"
        }).then(response => {
            window.alert(" 목록 불러오기가 성공했습니다.")
            setBookList(response.data);

        }).catch(error => { window.alert("통신 오류 발생")});

    }, []);

    return (
        <div className="container">

            <div className="row">
                <div className="col offset-1">
                    <h1>도서 관리화면</h1>
                    <p>리액트 예제</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
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
                            </tr>
                        </thead>
                        <tbody>
                            {BookList.map((Book,index) => (
                                <tr key={Book.bookId}>
                                    <td className="pc-only">{Book.bookId}</td>
                                    <td>{Book.bookTitle}</td>
                                    <td>{Book.bookAuthor}</td>
                                    <td>{Book.bookPublisher}</td>
                                    <td>{Book.bookPrice}</td>
                                    <td className="pc-only">{Book.bookPublicationDate}</td>
                                    <td className="pc-only">{Book.bookPageCount}</td>
                                    <td className="pc-only">{Book.bookGenre}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}
export default Book