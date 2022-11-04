enum Error {
    requeired = "Can't be blank",
    numberOnly = 'Wrong format, number only',
    symbolOnly = 'Wrong format, letter only',
}
export const validate=(value:string, type?:'symbol'|'number', length?:number)=>{
    value.replaceAll(' ', '')
     if(!value||value.length===0)return Error.requeired;
    if(type && type==='number' &&/\D{1,}/.test(value)) return Error.numberOnly;
    if(type && type==='symbol' &&/\d{1,}/.test(value)) return Error.symbolOnly;
    if(length && value.length!==length) return `The minimum length is ${length} characters`
    return undefined

    

}