export function onRequest(context) {
  const json = JSON.stringify({
    "code": 0,
    "message": "You have successfully visit",
  });
  return new Response(json, {
    headers: {
      'content-type': 'application/json',
      'x-edgefunctions': 'Welcome to use EdgeOne Pages Functions.',
    },
  });
}

