import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let token: string | undefined;
  //   // Clone the request headers and set a new header `x-hello-from-middleware1`

  if (request.cookies.has('user')) {
    const parseToken = JSON.parse(request.cookies.get('user')?.value || '');
    token = parseToken.token;
  } else if (request.headers.get('Authorization')?.startsWith('Bearer ')) {
    token = request.headers.get('Authorization')?.substring(7);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next();

 try {
    if(token) {
        // const {} = await verifyJWT
    }
 } catch (error) {
    
 }
  return response;
}
