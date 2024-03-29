import { useEffect, useRef, useState } from "react"
import { Modal } from "bootstrap"

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
    const [backup, setBackup] = useState([]);
    const [data, setData] = useState({
        itemName: "",
        itemPrice: "",
        itemType: ""
    })

    //useRef : 특정 대상(태그)을 참조할수 있는 훅
    // - const 이름 =useRef(초기값);
    // - 태그에 ref라는 속성으로 이름을 지정해두면 언제든지 불러서 사용할 수 있다.
    const bsModal =useRef();

    const changeData = e => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newData);
    };

    //(중요)"시작하자마자 products의 내용을 backup으로 복제(1회)"
    useEffect(() => {
        setBackup(products.map(products => {
            const newProducts = { ...products };
            return newProducts;
        }));

    }, []);

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

    //취소버튼을 누르면 실행할 함수
    // -backup에 들어있는 target과 번호가 같은 데이터를 products의 target과 같은 번호에 덮어쓰기
    const cancelItem = (target) => {

        //backup에서 target의 번호에 해당하는 객체를 찾는다(filter)
        const findResult = backup.filter(product => product.itemNo === target.itemNo);
        //console.log(findResult[0]);

        const newProducts = products.map(product => {
            if (product.itemNo === target.itemNo) {//target과 같은 번호의 상품 만큼은
                return {
                    ...findResult[0],//다른건 backup데이터로 두고
                    edit: false//edit를 false로 바꿔라
                };
            }
            return product;//나머진 현상유지
        });

        setProducts(newProducts);
    };

    const saveItem = (target) => {

        //백업 데이터 중 target과 번호가 같은 데이터를 갱신
        const newBackup = backup.map(product => {
            if (product.itemNo === target.itemNo) {//target과 같은 번호의 상품 만큼은
                return {
                    ...target,//다른건 그대로 둬도
                    edit: false//edit를 false로 바꿔라
                };
            }
            return product;//나머진 현상유지수정 완료 및 취소 구현
        });
        setBackup(newBackup);

        const newProducts = products.map(product => {
            if (product.itemNo === target.itemNo) {//target과 같은 번호의 상품 만큼은
                return {
                    ...product,//다른건 그대로 둬도
                    edit: false//edit를 false로 바꿔라
                };
            }
            return product;//나머진 현상유지
        });

        setProducts(newProducts);


    };

    //아이템 삭제
    // - 배열에서 항목을 삭제할 때도 filter를 사용한다.
    const deleteItem = (target) => {
        //아이템 삭제
        const newProducts = products.filter(product => product.itemNo !== target.itemNo);
        setProducts(newProducts);

        //백업 삭제
        const newBackup = backup.filter(product => product.itemNo !== target.itemNo);
        setBackup(newBackup);
    };

    //항목추가
    // - data에 들어있는 객체를 복사해서 items에 추가
    // - data는 깨끗하게 정리
    const addItem = e => {

        const itemNo = products.length == 0 ? 1 : products[products.length - 1].itemNo + 1;
        //아이템 추가
        //const newItems = products.concat({...data});
        const newItems = [
            ...products,
            {
                ...data,
                edit: false,
                itemNo: itemNo
            }
        ];
        setProducts(newItems);

        //백업 추가
        const newBackup = [
            ...products,
            {
                ...data,
                edit: false,
                itemNo: itemNo
            }
        ];
        setBackup(newBackup);


        //입력창 초기화
        setData({
            itemName: "",
            itemPrice: "",
            itemType: ""
        });

        //모달 닫기
        closeModal();

    };

    //모달 여는 함수
    const openModal = () => {
        //var modal = new Modal(document.querySelector("#exampleModal")); //VanillaJS style
        var modal = new Modal(bsModal.current); //React style
        modal.show();
    };
    //모달 닫는 함수
    const closeModal = () => {
       // var modal = Modal.getInstance(document.querySelector("#exampleModal")); //VanillaJS style
        var modal = Modal.getInstance(bsModal.current); //React style
        modal.hide();
    }

    //모달창 취소버튼
    const closeAddItem =()=>{
        //입력창 초기화
        setData({
            itemName: "",
            itemPrice: "",
            itemType: ""
        });

        //모달 닫기
        closeModal();
    }

    return (

        <div className="container-fluid" key={products.itemNo}>
            <h1 className="text-center mb-4 p-4 bg-black text-light"> 상품 목록</h1>

            <div className="row">
                <div className="col-3 offset-1">
                    <button className="btn btn-primary btn-lg w-100 mb-3" onClick={openModal}>신규등록</button>
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
                    product.edit ? (<div className="row mb-1 text-center">
                        <tr className="table-light ">

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
                                <button className="btn btn-sm btn-secondary" onClick={e => cancelItem(product)}>취소</button>
                                <button className="btn btn-sm btn-success ms-1" onClick={e => saveItem(product)}>완료</button>
                            </td>
                        </tr>
                    </div>

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
                                    <button className="btn btn-sm btn-danger ms-1" onClick={e => deleteItem(product)}>삭제</button>
                                </td>
                            </div>
                        </tr >
                    )

                ))}

            </table >


            {/* Modal */}
            <div className="modal fade" ref={bsModal} id="exampleModal" tabIndex="-1"
            data-bs-backdrop="static" 
            aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">상품 등록</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body container">
                            <div className="row">
                                <div className="col-12 m-2">
                                    <label className="form-label">상품 이름 : </label>
                                    <input name="itemName"className="form-control" value={data.itemName} onChange={changeData} />
                                </div>
                                <div className="col-12 m-2">
                                    <span>상품 가격 : </span>
                                    <input name="itemPrice"className="form-control" value={data.itemPrice} onChange={changeData} />
                                </div>
                                <div className="col-12 m-2">
                                    <span>상품 타입 : </span>
                                    <input name="itemType"className="form-control" value={data.itemType} onChange={changeData} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/*  자동으로 닫히는 버튼 */}
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button> */}
                            {/*  수동으로 닫히는 버튼 */}
                            <button type="button" className="btn btn-secondary" onClick={closeAddItem}>취소</button>
                            <button type="button" className="btn btn-primary" onClick={addItem}>추가</button>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
export default Exam10