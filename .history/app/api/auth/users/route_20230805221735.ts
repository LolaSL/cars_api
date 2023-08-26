import { NextResponse } from "next/server";

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
type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;
export const POST = async (req: Request): Promise<NewResponse> => {
    const body=(await req.json()) as New
    
}