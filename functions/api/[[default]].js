export function onRequest(context) {
  const { pathname } = new URL(context.request.url);
  
  // 解析路径参数
  const segments = pathname.split('/').filter(Boolean);
  let params = {};
  
  if (segments[1] === 'get') {
    if (segments.length > 1) {
      params.id = segments[2]; // 提取动态参数
    }
  }

  // 构建响应数据
  const responseData = {
    pathname: pathname,
    params: params,
    timestamp: new Date().toISOString()
  };

  // 返回JSON格式响应
  return new Response(JSON.stringify(responseData), {
    headers: {
      'content-type': 'application/json',
      'x-edgefunctions': 'EdgeOne Pages GET Function'
    }
  });
}
