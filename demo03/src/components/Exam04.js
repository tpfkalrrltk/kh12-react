import { useState } from "react";

const Exam04 = () => {

    const [text, setText] = useState(0);
    //const [text,setText] =useState("[classNeme=size]");



    return (
        <>
            <h1>(Q) 주말에 뭐하세요?</h1>
            <textarea className="size" cols={100} rows={20} onInput={(e)=> setText(e.target.textLength)}
            ></textarea>

           
      
            <h3><span>{text}</span></h3>
            <h3 className="">/100 byte</h3>
            <br /><br /> <br />
            <button className="w-50 btn-lg btn btn-primary">저장</button>
        </>
    );

}
export default Exam04