export default async function handler(req, res) {
  const { locale } = req.query;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiUrl}/api/project?populate=*&locale=${locale}`);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch projects' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
