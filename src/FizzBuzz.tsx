import {useState} from "react";

export const calcFizzBuzz = (input:number,divisor1:number|undefined, divisor2:number|undefined, word1:string|undefined, word2:string|undefined):string => {
    if(divisor1 === undefined) {divisor1 = 3;}
    if(divisor2 === undefined) {divisor2 = 5;}
    if(word1===undefined) {  word1 = "fizz";}
    if(word2 === undefined) {word2 = "buzz";}

    let outPut:string = "";
    if(input%divisor1==0||input%divisor2==0) {
        if(input%divisor1==0) {
            outPut+= word1;
        }

        if(input%divisor2==0) {
            outPut+=word2;
        }
        return outPut;
    }
    return input.toString();
}

const FizzBuzz = () => {

    const [fbInput, setFbInput] = useState<number>(0);
    const [fbOutput, setFbOutput] = useState<Element[]>([]);
    const [word1, setWord1] = useState<string|undefined>(undefined);
    const [word2, setWord2] = useState<string|undefined>(undefined);
    const [div1, setDiv1] = useState<number|undefined>(undefined);
    const [div2, setDiv2] = useState<number|undefined>(undefined);

    const handleChange = () => {
        let list:string[] = [];
        for(let i = 1;i<=Number(fbInput);i+=1) {
            list.push(calcFizzBuzz(i,div1,div2,word1,word2));
        }
        const elements = list.map((word)=> {
            return <p key={word+Math.random()}>{word}</p>
        });
        setFbOutput(elements);
    }

    return (
        <>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1>FizzBuzz</h1>
                <input
                    type={"number"}
                    value={div1}
                    onChange={(event)=>{setDiv1(Number(event.target.value))}}
                    placeholder={"Optional: Enter divisor 1"}
                    title={"Divisor 1, default = 3"}
                />
                <input
                    title={"Divisor 2, default = 5"}
                    type={"number"}
                    value={div2}
                    onChange={(event)=>{setDiv2(Number(event.target.value))}}
                    placeholder={"Optional: Enter divisor 2"}
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
                    title={"Target Number"}
                    type={"number"}
                    value={fbInput}
                    onChange={(event)=>setFbInput(Number(event.target.value))}
                />
                <input
                    type={"submit"}
                    onClick={()=>{handleChange()}}
                />
                {fbOutput}
            </div>
        </>
    )
}
export default FizzBuzz;