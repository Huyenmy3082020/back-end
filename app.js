const express = require('express');
const app = express();
const port = 5001;

// Dữ liệu mẫu
let data = {
 
    "data": [
        {
          "id": 5203,
          "first_name": "Duy",
          "last_name": "Khang",
          "full_name": "Duy Khang",
          "nickname": "duykhang1301",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/5203/644a3d01ca0cb.jpg",
          "bio": "✨ 2003 ✨\r\nVietnam 🇻🇳\r\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
          "tick": false,
          "followings_count": 5,
          "followers_count": 28,
          "likes_count": 87,
          "website_url": "https://fullstack.edu.vn/",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2023-03-01 20:52:36",
          "updated_at": "2024-07-26 16:38:25"
        },
        {
          "id": 211,
          "first_name": "Đỗ",
          "last_name": "Xuân Bách",
          "full_name": "Đỗ Xuân Bách",
          "nickname": "xuanbachdev",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/211/63c12e11ab47e.jpg",
          "bio": "Xuanbach.dev",
          "tick": false,
          "followings_count": 7,
          "followers_count": 107,
          "likes_count": 36,
          "website_url": "https://fullstack.edu.vn/",
          "facebook_url": "https://www.facebook.com/xuanbachh.dev",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2022-09-11 12:25:57",
          "updated_at": "2024-06-26 14:59:04"
        },
        {
          "id": 6021,
          "first_name": "Duong Quang",
          "last_name": "Thai",
          "full_name": "Duong Quang Thai",
          "nickname": "thaiq9577",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/6021/651055f2338b4.jpg",
          "bio": "5 nam 1 loi hua",
          "tick": false,
          "followings_count": 11,
          "followers_count": 5,
          "likes_count": 16,
          "website_url": "https://fullstack.edu.vn/",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2023-08-08 14:11:49",
          "updated_at": "2024-05-26 13:36:09"
        },
        {
          "id": 89,
          "first_name": "Vo",
          "last_name": "Chau Vuong",
          "full_name": "Vo Chau Vuong",
          "nickname": "chauvuongvo",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/",
          "bio": "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
          "tick": false,
          "followings_count": 26,
          "followers_count": 8,
          "likes_count": 31,
          "website_url": "https://fullstack.edu.vn/",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2022-08-22 00:14:16",
          "updated_at": "2024-05-26 13:04:37"
        },
        {
          "id": 3998,
          "first_name": "Trần",
          "last_name": "Toàn",
          "full_name": "Trần Toàn",
          "nickname": "tranhuutoan",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/3998/63650b54826f3.jpg",
          "bio": "https://github.com/htoann/tiktok-clone",
          "tick": false,
          "followings_count": 14,
          "followers_count": 17,
          "likes_count": 34,
          "website_url": "",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2022-10-22 10:51:15",
          "updated_at": "2024-04-30 11:21:31"
        },
        {
          "id": 4984,
          "first_name": "Khang",
          "last_name": "Khang",
          "full_name": "Khang Khang",
          "nickname": "khang",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/4984/6478489c374c4.png",
          "bio": "✨ 1998 ✨ Vietnam 🇻🇳 ĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
          "tick": false,
          "followings_count": 13,
          "followers_count": 6,
          "likes_count": 30,
          "website_url": "https://fullstack.edu.vn/",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2023-02-23 19:46:10",
          "updated_at": "2024-03-27 21:18:36"
        },
        {
          "id": 135,
          "first_name": "Mr",
          "last_name": "Quynh",
          "full_name": "Mr Quynh",
          "nickname": "quynhnv",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/135/644ff9926da0a.jpg",
          "bio": "✨ 2000 ✨\r\nNothing is impossible",
          "tick": false,
          "followings_count": 29,
          "followers_count": 15,
          "likes_count": 34,
          "website_url": "https://fullstack.edu.vn/",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2022-08-24 08:24:48",
          "updated_at": "2024-08-26 10:55:53"
        },
        {
          "id": 5167,
          "first_name": "Mr",
          "last_name": "Birdy",
          "full_name": "Mr Birdy",
          "nickname": "anhbui01vn",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/5167/63f97a1f7015c.jpg",
          "bio": "Main my account. Follow me to watch at lease video!",
          "tick": false,
          "followings_count": 6,
          "followers_count": 6,
          "likes_count": 15,
          "website_url": "https://info-anh.netlify.app",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2023-02-25 09:55:40",
          "updated_at": "2024-06-07 15:02:35"
        },
        {
          "id": 6296,
          "first_name": "Chiến",
          "last_name": "Huỳnh",
          "full_name": "Chiến Huỳnh",
          "nickname": "huynhdinhchien96-1",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/",
          "bio": "✨ 1998 ✨\r\nVietnam 🇻🇳\r\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
          "tick": false,
          "followings_count": 8,
          "followers_count": 5,
          "likes_count": 24,
          "website_url": "https://fullstack.edu.vn/",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2023-10-03 00:19:32",
          "updated_at": "2024-08-31 16:47:44"
        },
        {
          "id": 6452,
          "first_name": "Trần",
          "last_name": "Ngọc Hoàn",
          "full_name": "Trần Ngọc Hoàn",
          "nickname": "hoantiny",
          "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/6452/66261877d70f1.jpg",
          "bio": "2001 v",
          "tick": false,
          "followings_count": 11,
          "followers_count": 2,
          "likes_count": 11,
          "website_url": "https://fullstack.edu.vn/",
          "facebook_url": "",
          "youtube_url": "",
          "twitter_url": "",
          "instagram_url": "",
          "created_at": "2023-11-14 13:55:00",
          "updated_at": "2024-07-08 23:14:01"
        }
      ],
};

const cors = require('cors'); // Thêm dòng này
// Middleware để parse JSON bodies
app.use(express.json());

// Định nghĩa route cơ bản
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(cors());

// Định nghĩa một route khác với phương thức GET
app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

// Định nghĩa một route với phương tức GET để lấy tất cả dữ liệu
app.get('/api/account', (req, res) => {
  res.json(data);
});
app.get('/api/video', (req, res) => {
  res.json(data);
});
// Định nghĩa một route với phương thức POST để thêm dữ liệu mới
app.get('/api/account/paginate', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 5;
  
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;

  const paginatedData = data.data.slice(startIndex, endIndex);

  res.json({
    page: page,
    perPage: perPage,
    total: data.data.length,
    totalPages: Math.ceil(data.data.length / perPage),
    data: paginatedData
  });
});


// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
