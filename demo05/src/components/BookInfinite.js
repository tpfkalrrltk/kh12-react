import axios from "axios";
import { useEffect, useState } from "react";

const BookInfinite = () => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(30);
    const [bookList, setBookList] = useState([]);

    const loadBook = () => {
        axios({
            url: `${process.env.REACT_APP_REST_API_URL}/book/page/${page}/size/${size}`,
            method: "get"
        })
            .then(response => {
                //setBookList(response.data);//덮어쓰기 해야한다. 사용 불가

                setBookList([...bookList, ...response.data]);//spread 연산자
                // setBookList(bookList.concat(...response.data));//concat 함수
            })
            .catch(error => {

            });
    };

    useEffect(() => {
        loadBook();
    }, [])

const

    return (
        <div className="container">

            <div className="row">
                <div className="col-6 bg-primary text-secondary rounded">
                    <h1>무한 스크롤 예제</h1>
                    <p>React CRUD 연습 예제</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>인덱스 번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>출판사</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bookList.map((book, index) => (
                                <tr key={book.bookId}>
                                    <td>{index}</td>
                                    <td>{book.bookTitle}</td>
                                    <td>{book.bookAuthor}</td>
                                    <td>{book.bookPublisher}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>

                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary w-100" onClick={nextPage}>{size}개 더보기</button>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default BookInfinite;