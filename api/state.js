let state = {
  players: [],
  results: []
};

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(state);
  }

  if (req.method === "POST") {
    state = req.body;
    return res.status(200).json({
      success: true,
      state
    });
  }

  return res.status(405).json({
    error: "Method not allowed"
  });
}
