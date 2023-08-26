interface NewUserRequest{
    fullname: string;
    email: string;
    password: string;
}
interface NewUserResponse{
    id: string;
    fullname: string;
    email: string;
    password: string;
    role: string;
}
type NewResponse = Next
export const POST = async (req: Request): Promise<NewUserResponse>=> {
    
}