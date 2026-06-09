export async function GET() {
  return new Response(JSON.stringify({
    resource: "https://mercadinhodosilvio.com.br",
    authorization_servers: ["https://mercadinhodosilvio.com.br"],
    scopes_supported: []
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}