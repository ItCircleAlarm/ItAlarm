// Express와 Mongoose 라이브러리를 import합니다.
const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

// MongoDB와 연결합니다. 여기서 "board"는 데이터베이스의 이름입니다.
mongoose.connect("mongodb://localhost:27017/board", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
// 동아리 게시글의 스키마를 정의합니다. 이 스키마는 MongoDB에서 각 게시글이 어떤 필드를 가질지 정의합니다.
const clubSchema = new Schema({
  title: String,
  deadline: Date,
  link: String,
  description: String,
});

// 위에서 정의한 스키마를 이용해 MongoDB에 'board'라는 이름의 컬렉션을 생성합니다. 이 컬렉션에 접근할 때는 'Club' 모델을 사용합니다.
const Club = mongoose.model("board", clubSchema);

// Express 애플리케이션을 생성합니다.
const app = express();
// 이 미들웨어는 들어오는 요청 본문을 JSON으로 파싱해주는 역할을 합니다.
app.use(express.json());

// GET /clubs 요청을 처리하는 라우트입니다. 모든 동아리 게시글을 가져와 응답으로 보냅니다.
app.get("/clubs", async (req, res) => {
  const clubs = await Club.find();
  res.send(clubs);
});

// POST /clubs 요청을 처리하는 라우트입니다. 새로운 동아리 게시글을 생성하고 그 게시글을 응답으로 보냅니다.
app.post("/clubs", async (req, res) => {
  const newClub = new Club(req.body);
  const savedClub = await newClub.save();
  res.send(savedClub);
});

// PUT /clubs/:id 요청을 처리하는 라우트입니다. 요청 본문에 따라 특정 동아리 게시글을 수정하고 수정된 게시글을 응답으로 보냅니다.
app.put("/clubs/:id", async (req, res) => {
  const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); // 'new: true' returns the updated document
  res.send(updatedClub);
});

// DELETE /clubs/:id 요청을 처리하는 라우트입니다. 특정 동아리 게시글을 삭제합니다.
app.delete("/clubs/:id", async (req, res) => {
  await Club.findByIdAndRemove(req.params.id);
  res.send({});
});

// 3001 포트에서 서버를 시작합니다.
app.listen(3001, () => console.log("Server listening on port 3001"));
