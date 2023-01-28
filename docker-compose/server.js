const express = require("express");
const redis = require("redis");

const redisClient = redis.createClient({
  socket: {
    host: "redis-server", //도커 환경일 때와 아닐 때 호스트 인자가 다름
    port: 6379, // 레디스의 기본 포트
  },
});

const app = express();
const PORT = 8080;

app.get("/", async (req, res) => {
  await redisClient.connect();

  let number = await redisClient.get("number");

  if (number === null) number = 0;

  console.log("Number: " + number);

  res.send("숫자가 1씩 올라갑니다. 숫자: " + number);

  await redisClient.set("number", parseInt(number) + 1);

  await redisClient.disconnect();
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
