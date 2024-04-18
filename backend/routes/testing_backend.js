
const express = require("express");

const router = express.Router();

router.get("/test", async (req, res) => {
   res.status(200).json({
    "status" : true,
    "msg" : "Hello Test, The backend is working properly page",
   });
});

module.exports = router;
