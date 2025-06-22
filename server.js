// const express = require ('express');
// const {v4 : uuidv4} = require('uuid');
// const app = express();
// const port = 3000;
// const path = require('path');
// const methodOverride = require('method-override');
// const multer = require('multer');
// app.use(methodOverride('_method'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public'))); 
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// let posts = [
//     {   
//         id: uuidv4(),
//         username: "Pankaj",
//         content: "This is my first post",
//         photo: "https://example.com/photo1.jpg"
//     },
//     {
//         id: uuidv4(),
//         username: "Himanshu",
//         content: "This is my first post",
//         photo: "https://example.com/photo2.jpg"
//     },
//     {   
//         id: uuidv4(),
//         username: "rahul",
//         content: "This is my first post",
//         photo: "https://example.com/photo3.jpg"
//     }
// ];

// app.get("/posts", (req, res) => {
//     res.render('home.ejs', { posts });
// });
// app.get("/posts/new", (req, res) => {
//     res.render('new.ejs', { posts });
// });
// app.post("/posts", (req, res) => {
//     const { username, content, photo } = req.body;
//     const id = uuidv4();
//     posts.push({ id, username, content, photo });
//     res.redirect("/posts");
// });
// app.get("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((post) => post.id === id);
//     res.render("show.ejs", { post });
// });
// app.get("/posts/:id/edit", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((post) => post.id === id);
//     res.render("edit.ejs", { post });
// });
// app.patch("/posts/:id", upload.single('photo'), (req, res) => {
//     let { id } = req.params;
//     let { content } = req.body;
//     let post = posts.find((post) => post.id === id);

//     post.content = content;

//     // If a new photo is uploaded, update it
//     if (req.file) {
//         post.photo = `/uploads/${req.file.filename}`;
//     }

//     res.redirect("/posts");
// });
// app.delete("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     posts = posts.filter((post) => post.id !== id);
//     res.redirect("/posts");
// });

// app.get("/*", (req, res) => {
//     res.status(404);
//     res.send("404 Page not found");
// }
// );
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override');
const multer = require('multer');

// Multer storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Dummy post data
let posts = [
   {
    id: uuidv4(),
    username: "CoderX",
    content: "Why JavaScript is still king in 2025?",
    photo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  },
  {
    id: uuidv4(),
    username: "TravelWithMe",
    content: "Best offbeat places in Himachal for solo travellers",
    photo: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg"
  },
  {
    id: uuidv4(),
    username: "NatureSeeker",
    content: "Why do we feel so peaceful in nature?",
    photo: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
  },
  {
    id: uuidv4(),
    username: "TechieNeha",
    content: "What will Artificial Intelligence look like in 2030?",
    photo: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg"
  },
  {
    id: uuidv4(),
    username: "BookLover",
    content: "Which is the one book that changed your life?",
    photo: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg"
  },
  {
    id: uuidv4(),
    username: "FitWithArjun",
    content: "Home workouts vs. Gym: Which is more effective?",
    photo: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
  },
  {
    id: uuidv4(),
    username: "Wanderlust_Priya",
    content: "How safe is solo travel in northeast India?",
    photo: "https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg"
  },
  {
    id: uuidv4(),
    username: "CryptoSam",
    content: "Should we still invest in Bitcoin in 2025?",
    photo: "https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg"
  },
  {
    id: uuidv4(),
    username: "CoderGirl",
    content: "Frontend vs Backend – What should I learn first?",
    photo: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
  },
  {
    id: uuidv4(),
    username: "FitnessFreak",
    content: "Gym vs Home Workout – What gives better results?",
    photo: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
  },
  {
    id: uuidv4(),
    username: "MotivatorRahul",
    content: "How do you stay motivated when you feel like giving up?",
    photo: "https://images.pexels.com/photos/302280/pexels-photo-302280.jpeg"
  },
  {
    id: uuidv4(),
    username: "EcoWarrior",
    content: "How can we reduce plastic use at home?",
    photo: "https://images.pexels.com/photos/2559749/pexels-photo-2559749.jpeg"
  }
];

// Routes
app.get("/posts", (req, res) => {
    res.render('home.ejs', { posts });
});

app.get("/posts/new", (req, res) => {
    res.render('new.ejs');
});

// ✅ UPDATED: Use multer to accept file upload
app.post("/posts", upload.single('photo'), (req, res) => {
    const { username, content } = req.body;
    const id = uuidv4();
    const photo = req.file ? `/uploads/${req.file.filename}` : null;
    posts.push({ id, username, content, photo });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((post) => post.id === id);
    res.render("show.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((post) => post.id === id);
    res.render("edit.ejs", { post });
});

app.patch("/posts/:id", upload.single('photo'), (req, res) => {
    let { id } = req.params;
    let { content } = req.body;
    let post = posts.find((post) => post.id === id);

    post.content = content;

    if (req.file) {
        post.photo = `/uploads/${req.file.filename}`;
    }

    res.redirect("/posts");
});


app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((post) => post.id !== id);
    res.redirect("/posts");
});

// 404 fallback
app.get("/*", (req, res) => {
    res.status(404).send("404 Page not found");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
