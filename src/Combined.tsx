import {useState} from "react";
import {calcFib} from "./Fib.tsx";
import {calcFizzBuzz} from "./FizzBuzz.tsx";

const calcCombined = (
    input:number,
    offset1:number|undefined,
    offset2:number|undefined,
    div1:number|undefined,
    div2:number|undefined,
    word1:string|undefined,
    word2:string|undefined):string[]  => {
    const fibOutput = calcFib(input,offset1,offset2);
    return  fibOutput.map((number: number) => {
        return calcFizzBuzz(number, div1, div2, word1, word2);
    })
}
const Combined = () => {
    const [input, setInput] = useState<number>(0);
    const [word1, setWord1] = useState<string|undefined>(undefined);
    const [word2, setWord2] = useState<string|undefined>(undefined);
    const [div1, setDiv1] = useState<number|undefined>(undefined);
    const [div2, setDiv2] = useState<number|undefined>(undefined);

    const [offset1, setOffset1] = useState<number|undefined>(undefined);
    const [offset2, setOffset2] = useState<number|undefined>(undefined);

    const [elements, setElements] = useState<Element[]>([]);

    const handleChange = ()=> {
        const combined = calcCombined(input,offset1,offset2,div1,div2,word1,word2);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setElements(combined.map((item)=>{
            return <p key={item+Math.random()}>{item}</p>
        }))
    }

    return (
        <>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1>Combined FizzBuzz + Fibonacci Sequence</h1>
                <input
                    type={"number"}
                    value={div1}
                    onChange={(event)=>{setDiv1(Number(event.target.value))}}
                    placeholder={"Optional: Enter divisor 1, default = 3"}
                    title={"Divisor 1, default = 3"}
                />
                <input
                    title={"Divisor 2, default = 5"}
                    type={"number"}
                    value={div2}
                    onChange={(event)=>{setDiv2(Number(event.target.value))}}
                    placeholder={"Optional: Enter divisor 2, default = 5"}
                />
                <input
                    type={"text"}
                    value={word1}
                    onChange={(event)=>{setWord1(event.target.value)}}
                    placeholder={"Optional: Enter word 1"}
                />
                <input
                    type={"text"}
                    value={word2}
                    placeholder={"Optional: Enter word 2"}
                    onChange={(event)=>setWord2(event.target.value)}
                />

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
                    title={"Target Number"}
                    type={"number"}
                    value={input}
                    onChange={(event)=>setInput(Number(event.target.value))}
                />
                <input
                    type={"submit"}
                    onClick={()=>{handleChange()}}
                />
                {elements}
            </div>
        </>
    )
}
export default Combined