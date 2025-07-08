export default async function handler(req, res) {
  const { locale } = req.query; // get locale from query params
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiUrl}/api/hero-sliders?populate=*&locale=${locale}`);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch hero sliders' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
