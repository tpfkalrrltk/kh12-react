import { useState } from "react"

const Exam10 = () => {
    const [products, setProducts] = useState([
        { itemNo: 1, itemName: "포켓몬스터빵", itemPrice: 500, itemType: "식품" },
        { itemNo: 2, itemName: "허니버터칩", itemPrice: 1300, itemType: "식품" },
        { itemNo: 3, itemName: "참이슬후레시", itemPrice: 2200, itemType: "주류" },
        { itemNo: 4, itemName: "카스", itemPrice: 2500, itemType: "주류" },
        { itemNo: 5, itemName: "테라", itemPrice: 1300, itemType: "주류" },
        { itemNo: 6, itemName: "켈리", itemPrice: 1400, itemType: "주류" },
        { itemNo: 7, itemName: "처음처럼", itemPrice: 2000, itemType: "주류" },
        { itemNo: 8, itemName: "오징어땅콩", itemPrice: 3500, itemType: "식품" },
        { itemNo: 9, itemName: "신라면", itemPrice: 1500, itemType: "식품" },
        { itemNo: 10, itemName: "하리보젤리", itemPrice: 5500, itemType: "식품" }
    ]);
    return (
        <div className="container" key={products.itemNo}>
            <h1 className="text-center mb-4 p-4 bg-black text-light"> 상품 목록</h1>

            <table className="row table table-hover">
                <tr className="col table-primary">
                    <div className="row mb-1 text-center">
                        <th className="col-1 offset-1 " >index번호</th>
                        <th className="col-2">상품번호</th>
                        <th className="col-3">상품명</th>
                        <th className="col-2">판매가</th>
                        <th className="col-2">분류</th>
                    </div>
                </tr>

                {products.map((product, index) => (
                    <tr className="table-light ">
                        <div className="row mb-1 text-center">
                            <td className="col-1 offset-1" > {index}</td>
                            <td className="col-2">{product.itemNo}</td>
                            <td className="col-3">{product.itemName}</td>
                            <td className="col-2">{product.itemPrice}원</td>
                            <td className="col-2">{product.itemType}</td>
                        </div>
                    </tr>

                ))}

            </table >
        </div>
    )
}
export default Exam10