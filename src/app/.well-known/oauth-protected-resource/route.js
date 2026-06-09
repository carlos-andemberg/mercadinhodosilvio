export async function GET() {
  return new Response(JSON.stringify({
    resource: "https://mercadinhodosilvio.com.br",
    authorization_servers: ["https://mercadinhodosilvio.com.br"],
    scopes_supported: ["public_read"],
    agent_auth: {
      register_uri: "https://mercadinhodosilvio.com.br/auth.md",
      supported_identity_types: ["none"],
      credential_types: ["none"]
    }
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}