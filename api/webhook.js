export default function handler(req, res) {
  console.log("Method:", req.method);

  if (req.method === "POST") {
    return res.status(200).send("OK");
  }

  return res.status(200).send("Webhook Ready");
}
