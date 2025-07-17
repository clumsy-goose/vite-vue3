export function onRequestGet(context) {
  // 获取URL查询参数
  const { searchParams } = new URL(context.request.url);
  const from = searchParams.get('from');
  const name = searchParams.get('name');
  
  // 构建响应数据
  const responseData = {
    userId: context.params.id,
    queryParams: {
      from: from || '未提供from参数',
      name: name || '未提供name参数'
    },
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