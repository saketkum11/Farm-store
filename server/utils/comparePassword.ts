import bycrpt from "bcryptjs"
export const comparePassword = async (text:string,hashed:string):Promise<boolean> =>{
    const salt = await bycrpt.compare(text,hashed)
    return salt
}