import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const hardcodedUsername = "admin";
const hardcodedPassword = "1234";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    if (username === hardcodedUsername && password === hardcodedPassword) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

      // Set the token as an HTTP-only cookie
      const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
        maxAge: 60 * 60, // 1 hour
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error in login POST request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";

// import jwt from 'jsonwebtoken';

// const hardcodedUsername = "admin";
// const hardcodedPassword = "1234";

// export async function POST(req: Request) {
//   try {
//     const { username, password } = await req.json();

//     if (!username || !password) {
//       return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
//     }

// 		if (req.method === 'POST') {
	
// 			if (username === hardcodedUsername && password === hardcodedPassword) {
// 				const token = jwt.sign({ username }, process.env.JWT_SECRET, {
// 					expiresIn: "1h",
// 				});
				
// 				return NextResponse.json({ message: "Login successful", token }, { status: 200 });
// 			} else {
// 				return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
// 			}
// 		} else {
// 			return NextResponse.json({ message: "Method ${req.method} Not Allowed`" }, { status: 405 });
// 		}
//   } catch (error) {
//     console.error("Error in login POST request:", error);
//     return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
//   }
// }
