function validateInput(email, url) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^https?:\/\/.+/;
  return {
    emailValid: emailRegex.test(email),
    urlValid: urlRegex.test(url)
  };
}

function handler(req, res) {
  const { email, url } = req.body;

  if (!email || !url) {
    return res.status(400).json({ error: "Both email and URL are required" });
  }

  const { emailValid, urlValid } = validateInput(email, url);

  if (emailValid && urlValid) {
    return res.status(200).json({ message: "Both email and URL are valid" });
  } else {
    return res.status(400).json({
      error: "Validation failed ❌",
      details: {
        email: emailValid ? "Valid" : "Invalid",
        url: urlValid ? "Valid" : "Invalid"
      }
    });
  }
}

module.exports = handler;
