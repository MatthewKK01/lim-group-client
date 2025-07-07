export default async function handler(req, res) {
  const { locale } = req.query;

  try {
    const response = await fetch(`http://91.99.179.84:1337/api/project?populate=*&locale=${locale}`);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch projects' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
