export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Webhook received:", req.body);
    return res.status(200).json({ success: true });
  }

  return res.status(200).json({ message: "Webhook endpoint is working" });
}
