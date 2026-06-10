export async function GET() {
  return new Response(JSON.stringify({
    linkset: [
      {
        anchor: "https://mercadinhodosilvio.com.br",
        "service-desc": [{"href": "https://mercadinhodosilvio.com.br"}],
        "service-doc": [{"href": "https://mercadinhodosilvio.com.br"}]
      }
    ]
  }), {
    headers: { 'Content-Type': 'application/linkset+json' }
  });
}