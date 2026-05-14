// const message = document.getElementById("lorem");

// console.log(message);

// const messages = document.getElementsByClassName("lorem");

// console.log(messages);

// const paragraphs = document.getElementsByTagName("body");

// console.log(paragraphs[0].children);

// const lorem = document.querySelector(".lorem");

// console.log(lorem);

const button = document.querySelector("button");

const onClickButton = () => {
  const lorem = document.querySelector("#lorem");
  lorem.innerHTML = "Foi um prazer dar aula para vocês";
};

button.onclick = onClickButton;
