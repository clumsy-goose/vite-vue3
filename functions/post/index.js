export async function onRequest(context) {
  // 只处理POST请求
  if (context.request.method !== 'POST') {
    return new Response(
      JSON.stringify({
        code: 405,
        message: 'Method Not Allowed'
      }),
      {
        status: 405,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  try {
    // 解析请求体
    const data = await context.request.json();
    
    // 处理POST数据（这里只是示例，你可以添加自己的业务逻辑）
    const processedData = {
      received: data,
      timestamp: new Date().toISOString()
    };

    // 返回成功响应
    return new Response(
      JSON.stringify({
        code: 0,
        message: 'POST request processed successfully edge function',
        data: processedData
      }),
      {
        headers: {
          'content-type': 'application/json',
          'x-edgefunctions': 'EdgeOne Pages POST Function'
        }
      }
    );
  } catch (error) {
    // 错误处理
    return new Response(
      JSON.stringify({
        code: 400,
        message: 'Bad Request',
        error: error.message
      }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }
}