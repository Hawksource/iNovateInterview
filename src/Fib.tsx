import {useState} from "react";

export const calcFib = (input:number, offset1:number|undefined, offset2:number|undefined):number[] => {
    if(offset1===undefined) {offset1 = 1;}
    if(offset2 ===undefined) {offset2 = 2;}

    let ret:number[] = [];
    for(let i = 1;i<=input;i+=1) {
        let total = 0;
        if(i-1-offset2<0|| i-1-offset1<0) {
            ret.push(1);
            continue;
        }
        total+= ret[i-1-offset1];
        total+= ret[i-1-offset2];
        ret.push(total);
    }
    return ret;
}

const Fib = () => {
    const [offset1, setOffset1] = useState<number|undefined>(undefined);
    const [offset2, setOffset2] = useState<number|undefined>(undefined);
    const [fibInput, setFibInput] = useState<number>(0);
    const [fibOutput, setFibOutput] = useState<Element[]>([]);

    const handleChange = () => {
        const elements = calcFib(fibInput,offset1,offset2).map((num)=> {
            return <p key={num+Math.random()}>{num}</p>
        });
        setFibOutput(elements);
    }

    return (
        <>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1>Fibonacci Sequence</h1>
                <input
                    type={"number"}
                    value={offset1}
                    onChange={(event)=>{setOffset1(event.target.value)}}
                    placeholder={"Optional: Enter offset 1, default = 1"}
                    title={"Offset 1"}
                />
                <input
                    title={"Offset 2"}
                    type={"number"}
                    value={offset2}
                    placeholder={"Optional: Enter offset 2, default = 2"}
                    onChange={(event)=>setOffset2(event.target.value)}
                />
                <input
                    type={"number"}
                    value={fibInput}
                    placeholder={"Required: enter target number"}
                    required={true}
                    onChange={(event)=>setFibInput(Number(event.target.value))}
                />
                <input
                    type={"submit"}
                    onClick={()=>{handleChange()}}
                />
                {fibOutput}
            </div>
        </>
    )
}
export default Fib