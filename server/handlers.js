const request = require("request-promise");

// get the quotes from the API
const getQuotes = async (req, res) => {
    try {
      const response = await request("https://zenquotes.io/api/random"); 
      const parsedResponse = JSON.parse(response);
      res.status(200).json({ status: 200, data: parsedResponse });
      console.log(parsedResponse) 
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message });
    }
  };

  const getMsg = async (req, res) => {
    res.status(200).json({status:200, message:"Success"})
  };

module.exports = {
    getQuotes,
    getMsg
}