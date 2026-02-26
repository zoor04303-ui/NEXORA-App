export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;
      console.log("Salla Webhook:", data);

      return res.status(200).json({
        success: true,
        received: true,
      });
    }

    return res.status(200).json({
      message: "Webhook endpoint is alive",
    });

  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(200).json({ error: false });
  }
}
