import { NextResponse } from "next/server";
import connectDB from '../../../lib/mongodb'
import UserModel from "@app/models/user";

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
    const body = (await req.json()) as NewUserRequest;
    connectDB();
    const oldUser = await UserModel.findOne({email: body.email})


    if (oldUser)
        return NextResponse.json(
            { error: "email is already in use!" },
        { status: 422}
        );
    const user = await UserModel.create({...body})
    return NextResponse.json({
        user: {
            id: user._string;
            fullname: string;
            email: string;
            password: string;
            role: string;
    }
})

}
