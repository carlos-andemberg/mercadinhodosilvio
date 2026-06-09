export async function GET() {
  return new Response(JSON.stringify({
    resource: "https://mercadinhodosilvio.com.br",
    authorization_servers: ["https://mercadinhodosilvio.com.br"],
    scopes_supported: ["public_read"],
    bearer_methods_supported: ["header"],
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