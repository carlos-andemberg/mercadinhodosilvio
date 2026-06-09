export async function GET() {
  return new Response(JSON.stringify({
    issuer: "https://mercadinhodosilvio.com.br",
    authorization_endpoint: "https://mercadinhodosilvio.com.br",
    token_endpoint: "https://mercadinhodosilvio.com.br",
    jwks_uri: "https://mercadinhodosilvio.com.br",
    scopes_supported: [],
    response_types_supported: [],
    grant_types_supported: []
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}