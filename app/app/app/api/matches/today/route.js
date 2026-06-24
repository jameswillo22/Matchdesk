export async function GET() {
  const today = new Date().toISOString().slice(0, 10);

  const response = await fetch(
    `https://api.thestatsapi.com/api/football/matches?date_from=${today}&date_to=${today}`,
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
