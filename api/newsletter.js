export default function newsletterHandler(req, res) {
  const { name, email } = req.query;

  console.log({ name, email });

  return res.json({ status: 'success' });
}
