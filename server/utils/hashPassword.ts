import bycrpt from "bcryptjs"
export const hashPassword = async (text:string):Promise<string> =>{
    const salt = await bycrpt.genSalt(10)
    const hashPassword =await bycrpt.hash(text,salt)
    return hashPassword
}