export async function GET(req, { params }) {
  const { id } = params;

  const response = await fetch(
    `https://api.thestatsapi.com/api/football/matches/${id}/stats`,
    {
      headers: {
        Authorization: `Bearer ${process.env.THESTATSAPI_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return Response.json(data);
}
