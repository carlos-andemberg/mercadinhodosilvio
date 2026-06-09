export async function GET() {
  return new Response(JSON.stringify({
    issuer: "https://mercadinhodosilvio.com.br",
    authorization_endpoint: "https://mercadinhodosilvio.com.br",
    token_endpoint: "https://mercadinhodosilvio.com.br",
    jwks_uri: "https://mercadinhodosilvio.com.br",
    scopes_supported: ["public_read"],
    bearer_methods_supported: ["header"],
    response_types_supported: [],
    grant_types_supported: [],
    agent_auth: {
      skill: "https://mercadinhodosilvio.com.br/auth.md",
      register_uri: "https://mercadinhodosilvio.com.br/auth.md",
      identity_types_supported: ["anonymous"],
      anonymous: {
        credential_types_supported: ["none"]
      },
      claim_uri: "https://mercadinhodosilvio.com.br/auth.md"
    }
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}