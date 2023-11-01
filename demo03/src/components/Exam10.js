import { useState } from "react"

const Exam10 = () => {
    const [products, setProducts] = useState([
        { itemNo: 1, itemName: "포켓몬스터빵", itemPrice: 500, itemType: "식품", edit: false },
        { itemNo: 2, itemName: "허니버터칩", itemPrice: 1300, itemType: "식품", edit: false },
        { itemNo: 3, itemName: "참이슬후레시", itemPrice: 2200, itemType: "주류", edit: false },
        { itemNo: 4, itemName: "카스", itemPrice: 2500, itemType: "주류", edit: false },
        { itemNo: 5, itemName: "테라", itemPrice: 1300, itemType: "주류", edit: false },
        { itemNo: 6, itemName: "켈리", itemPrice: 1400, itemType: "주류", edit: false },
        { itemNo: 7, itemName: "처음처럼", itemPrice: 2000, itemType: "주류", edit: false },
        { itemNo: 8, itemName: "오징어땅콩", itemPrice: 3500, itemType: "식품", edit: false },
        { itemNo: 9, itemName: "신라면", itemPrice: 1500, itemType: "식품", edit: false },
        { itemNo: 10, itemName: "하리보젤리", itemPrice: 5500, itemType: "식품", edit: false },

    ]);

    //  줄을 수정상태로 변경하는 함수
    // - 이 함수를 실행하려면 최소한 itemNo는 알아야 한다.
    // - 함수를 호출할 때 이벤트 정보(e) 대신 아이템정보(product)을 전달하여 처리하도록 처리
    const changeToEdit = (target) => {
        //console.log(target)

        const newProducts = products.map(product => {
            if (product.itemNo === target.itemNo) {//target과 같은 번호의 상품 만큼은
                return {
                    ...product,//다른건 그대로 둬도
                    edit: true//edit를 true로 바꿔라
                };
            }
            return product;//나머진 현상유지
        });

        setProducts(newProducts);
    };

    //  줄의 데이터를 변경하는 함수
    // - 어떤아이템인지(target)와 뭐라고 입력했는지(e)를 알아야한다.
    const changeItem = (target, e) => {
        const newProducts = products.map(product => {
         
            if (product.itemNo === target.itemNo) {//같은 번호를 발견한다면

                return {
                    ...product,//나머지 정보는 그대로 두고
                    [e.target.name]: e.target.value //입력창의 이름에 해당하는 필드값을 입력값을 바꿔라
                }
            }

            return product;
        });
        setProducts(newProducts);
    };

    return (
        <div className="container" key={products.itemNo}>
            <h1 className="text-center mb-4 p-4 bg-black text-light"> 상품 목록</h1>
            <div className="row mb-3 ">
                <div className="col-2 offset-1 ">
                    <button className="btn btn-primary btn-lg w-100">추가</button>
                </div>
            </div>

            <table className="row table table-hover">
                <tr className="col table-primary">
                    <div className="row mb-1 text-center">
                        <th className="col-1 offset-1 " >index번호</th>
                        <th className="col-2">상품번호</th>
                        <th className="col-3">상품명</th>
                        <th className="col-2">판매가</th>
                        <th className="col-2">분류</th>
                        <th className="col-1">관리</th>
                    </div>
                </tr>

                {products.map((product, index) => (
                    product.edit ? (
                        <tr className="table-light ">
                            <div className="row mb-1 text-center">
                                <td className="col-1 offset-1" > {index}</td>
                                <td className="col-2">{product.itemNo}</td>
                                <td className="col-3"> <input type="text" name="itemName" className="form-control" value={product.itemName} size={7}
                                    onChange={e => changeItem(product, e)} /></td>
                                <td className="col-2">
                                    <input type="text" className="form-control" name="itemPrice" value={product.itemPrice} size={5}
                                        onChange={e => changeItem(product, e)} />
                                </td>
                                <td className="col-2"><input type="text" name="itemType" className="form-control" value={product.itemType} size={5}
                                    onChange={e => changeItem(product, e)} /></td>
                                <td className="col-1">
                                    <button className="btn btn-sm btn-secondary">취소</button>
                                    <button className="btn btn-sm btn-success ms-1">완료</button>
                                </td>

                            </div>
                        </tr>
                    ) : (
                        <tr className="table-light ">
                            <div className="row mb-1 text-center">
                                <td className="col-1 offset-1" > {index}</td>
                                <td className="col-2">{product.itemNo}</td>
                                <td className="col-3">{product.itemName}</td>
                                <td className="col-2">{product.itemPrice}원</td>
                                <td className="col-2">{product.itemType}</td>
                                <td className="col-1">
                                    <button className="btn btn-sm btn-warning" onClick={e => changeToEdit(product)}>수정</button>
                                    <button className="btn btn-sm btn-danger ms-1">삭제</button>
                                </td>
                            </div>
                        </tr >
                    )

                ))}

            </table >
        </div >
    )
}
export default Exam10