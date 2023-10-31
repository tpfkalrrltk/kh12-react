import { useEffect, useState } from "react";

const Exam07 = () => {

    //객체로 상태변수 정의
    const [member, setMember] = useState({//입력데이터
        memberId: "",
        memberPw: "",
        memberPwRe: ""
    });

    const [result, setResult] = useState({//검사결과
        memberId: null,
        memberPw: null,
        memberPwRe: null
    });
    //입력데이터가 변하면 검사결과가 자동으로 계산되도록 처리



    useEffect(() => {
        // console.log("member가 변했습니다.")

        //ID 검사
        const idRegex = /^[a-z][a-z0-9]{7,19}$/;
        const idMatch = member.memberId.length ===0 ? null: idRegex.test(member.memberId);
        //PW 검사
        const pwRegex = /^[A-Za-z0-9!@#$]{8,16}$/;
        const pwMatch = member.memberPw.length ===0 ? null : pwRegex.test(member.memberPw);
        //PW-RE 검사
        const pwReMatch =member.memberPwRe.length ===0 ? null : member.memberPw.length > 0 && member.memberPw === member.memberPwRe;
        setResult({
            memberId: idMatch,
            memberPw: pwMatch,
            memberPwRe: pwReMatch
        });
    }, [member]);


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
                        <input type="text" name="memberId" value={member.memberId} 
                        className={`form-control 
                        ${result.memberId === true? 'is-valid' :''}
                        ${result.memberId === false? 'is-invalid' :''}
                        `} onChange={changeMember} />
                        <div className="valid-feedback">멋진 아이디입니다!</div>
                        <div className="invalid-feedback">사용할 수 없는 아이디입니다</div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6 offset-4">
                        <label className="form-label">비밀번호</label>
                        <input type="password" name="memberPw" value={member.memberPw} 
                        className={`form-control 
                        ${result.memberPw===true ? 'is-valid' : ''}
                        ${result.memberPw===false ? 'is-invalid' : ''}
                        `} onChange={changeMember} />    
                        <div className="valid-feedback">형식에 맞는 비밀번호입니다!</div>
                        <div className="invalid-feedback">사용할 수 없는 비밀번호입니다</div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6 offset-4">
                        <label className="form-label">비밀번호 확인</label>
                        <input type="password" name="memberPwRe" value={member.memberPwRe} 
                        className={`form-control 
                        ${result.memberPwRe===true ? 'is-valid':''}
                        ${result.memberPwRe===false ? 'is-invalid':''}
                        `} onChange={changeMember} />
                         <div className="valid-feedback">비밀번호가 일치 합니다!</div>
                        <div className="invalid-feedback">일치하지않는 비밀번호 입니다</div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3 offset-7">
                        <button className="btn btn-primary w-100" disabled={!(result.memberId===true 
                            && result.memberPw===true 
                            && result.memberPwRe===true)}>가입하기</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Exam07