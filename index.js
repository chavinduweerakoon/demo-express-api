const Joi = require("joi");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
//export PORT = 5000 if any - to configure env
const port = process.env.port || 3000;

//to prase json objects
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" },
];

app.get("/", (req, res) => {
  res.send("out of coffee");
});

app.get("/demo/courses", (req, res) => {
  res.send(courses);
});

//adding custom routes
app.get("/demo/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The couse with the given ID is not found");
  } else {
    res.send(course);
  }
});

//post
app.post("/demo/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body.schema);
  //   console.log(result);

  if (result.error) {
    //400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.listen(port, () => console.log(`listening on port ${port}..`));
