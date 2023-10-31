import { useState } from "react";

const Exam07 = () => {

    //객체로 상태변수 정의
    const [member, setMember] = useState({//입력데이터
        memberId: "",
        memberPw: "",
        memberPwRe: ""
    });

    const [result, setResult] = useState({//검사결과
        memberId:false,
        memberPw:false,
        memberPwRe:false
    });

    //객체의 상태를 한 번에 변경하는 함수를 구현
    const changeMember = (e) => {
        setMember({
            ...member, [e.target.name]: e.target.value
        })
    };


    return (

        <div className="container-fluid">

            <div className="row mt-5">
                <div className="col-3 offset-5 p-4 text-light bg-primary rounded">
                    <h1 >회원가입</h1>
                </div>
            </div>

            <form autoComplete="off">
                <div className="row mt-4">
                    <div className="col-6 offset-4">
                        <label className="form-label">아이디</label>
                        <input type="text" name="memberId" value={member.memberId} className="form-control" onChange={changeMember} />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6 offset-4">
                        <label className="form-label">비밀번호</label>
                        <input type="password" name="memberPw" value={member.memberPw} className="form-control" onChange={changeMember} />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6 offset-4">
                        <label className="form-label">비밀번호 확인</label>
                        <input type="password" name="memberPwRe" value={member.memberPwRe} className="form-control" onChange={changeMember} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3 offset-7">
                        <button className="btn btn-primary w-100">가입하기</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Exam07