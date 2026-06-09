export async function GET() {
  return new Response(JSON.stringify({
    issuer: "https://mercadinhodosilvio.com.br",
    authorization_endpoint: "https://mercadinhodosilvio.com.br",
    token_endpoint: "https://mercadinhodosilvio.com.br",
    jwks_uri: "https://mercadinhodosilvio.com.br",
    grant_types_supported: [],
    response_types_supported: [],
    subject_types_supported: [],
    id_token_signing_alg_values_supported: []
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}