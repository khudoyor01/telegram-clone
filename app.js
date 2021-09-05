let userId;
let Data__usage = {
  users: [
    {
      id: 0,
      first_name: "Asror",
      last_name: "Yunusov",
      avatar:
        "https://oir.mobi/uploads/posts/2020-02/1582020564_45-p-krutie-sportkari-75.jpg",
      bio: "Bio",
      user_name: "Asror",
      grooups_common: "4",
      shared_links: 15,
      shared_photos: 20,
      shared_videos: 12,
      activity: "online",
      message: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum ...1",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum ...1",
          time: new Date(),
        },
      ],
    },
    {
      id: 1,
      first_name: "Abror",
      last_name: "Bog'ibekov",
      avatar:
        "https://phonoteka.org/uploads/posts/2021-04/1618538497_1-p-fon-voda-i-ogon-1.jpg",
      bio: "Bio",
      user_name: "Abror",
      grooups_common: "2",
      shared_links: 12,
      shared_photos: 19,
      shared_videos: 12,
      activity: "last seen recently",
      message: [
        {
          id: 2,
          is_from_me: false,
          text: "lorem ipsum ...2",
          time: new Date(),
        },
        {
          id: 3,
          is_from_me: true,
          text: "lorem ipsum ...2",
          time: new Date(),
        },
      ],
    },
    {
      id: 2,
      first_name: "Sultonboy",
      last_name: "Qulmetov",
      avatar: "https://uprostim.com/wp-content/uploads/2021/05/image001-7.jpg",
      bio: "one_day",
      user_name: "yago",
      grooups_common: "6",
      shared_links: 12,
      shared_photos: 19,
      shared_videos: 12,
      activity: "last seen recently",
      message: [
        {
          id: 3,
          is_from_me: false,
          text: "lorem ipsum ...3",
          time: new Date(),
        },
        {
          id: 4,
          is_from_me: true,
          text: "lorem ipsum ...3",
          time: new Date(),
        },
      ],
    },
    {
      id: 3,
      first_name: "Munis",
      last_name: "Maxmudov",
      avatar:
        "https://im0-tub-com.yandex.net/i?id=74b6de39760f1743a0240d3153d75f3a&n=13",
      bio: "future",
      user_name: "amazing",
      grooups_common: "8",
      shared_links: 12,
      shared_photos: 19,
      shared_videos: 12,
      activity: "online",
      message: [
        {
          id: 4,
          is_from_me: false,
          text: "lorem ipsum ...4",
          time: new Date(),
        },
        {
          id: 5,
          is_from_me: true,
          text: "lorem ipsum ...4",
          time: new Date(),
        },
      ],
    },
    {
      id: 4,
      first_name: "Jaloladdin",
      last_name: "Karimov",
      avatar: "https://uprostim.com/wp-content/uploads/2021/05/image001-7.jpg",
      bio: "0007",
      user_name: "0007",
      grooups_common: "2",
      shared_links: 12,
      shared_photos: 19,
      shared_videos: 12,
      activity: "last seen recently",
      message: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum ...5",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum ...5",
          time: new Date(),
        },
      ],
    },
    {
      id: 5,
      first_name: "Zafar",
      last_name: "bilimman",
      avatar: "https://uprostim.com/wp-content/uploads/2021/05/image001-7.jpg",
      bio: "0007",
      user_name: "0004",
      grooups_common: "2",
      shared_links: 12,
      shared_photos: 19,
      shared_videos: 12,
      activity: "last seen recently",
      message: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum ...6",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum ...6",
          time: new Date(),
        },
      ],
    },
  ],
};

// searching object
let input = document.querySelector(".input");
let usersName = [];
Data__usage.users.map((users) => usersName.push(users.first_name));
let usersPhoto = [];
Data__usage.users.map((users) => usersPhoto.push(users.avatar));

// // Modal Burger btn

let burgerBtn = document.querySelector(".burger");
let settingMod = document.querySelector(".setting__modal");
burgerBtn.addEventListener("click", () => {
  settingMod.classList.add("active");
});

window.addEventListener("click", (e) => {
  if (e.target == settingMod) {
    settingMod.classList.remove("active");
  }
});

const user__info = document.querySelector(".user__infomodal");
const userBtn = document.querySelector(".user__info");
const closeBttn = document.querySelector("#close__bttn");
console.log(closeBttn);
closeBttn.addEventListener("click", () => {
  user__info.classList.toggle("active");
  userBtn.classList.toggle("active");
});

userBtn.addEventListener("click", () => {
  userBtn.classList.toggle("active");
  user__info.classList.toggle("active");
});

let mains = document.querySelector(".g");

function ism() {
  for (let i = 0; i < Data__usage.users.length; i++) {
    let names = document.createElement("h1");
    let get = document.createElement("li");
    let set = document.createElement("IMG");
    get.className = "get";
    set.className = "img";
    names.className = "name";
    names.textContent =
      Data__usage.users[i].first_name + " " + Data__usage.users[i].last_name;
    set.setAttribute("src", Data__usage.users[i].avatar);
    get.appendChild(set);
    get.appendChild(names);
    get.setAttribute("user_id", Data__usage.users[i].id);
    mains.appendChild(get);
  }

  let lis = document.querySelectorAll("li");

  input.addEventListener("keyup", () => {
    console.log((filter = input.value.toUpperCase()));
    for (let x = 0; x < lis.length; x++) {
      txtValue = lis[x].textContent || lis[x].innerText;
      if (txtValue.toUpperCase().indexOf(filter)) {
        lis[x].style.display = "none";
      } else {
        lis[x].style.display = "";
      }
    }
  });
}
ism();
let text = [];
let textInput = document.querySelector(".text__input");
let sendBtn = document.querySelector(".send");
let textArea = document.createElement("p");
let text__arae = document.querySelector(".text__area");
text__arae.appendChild(textArea);
text.push(textArea);
sendBtn.addEventListener("click", () => {
  let newMessage = document.querySelector(".text__input").value;
  textInput.value = "";
  for (let tabs in Data__usage) {
    Data__usage[tabs].forEach((chatItem, index) => {
      if (index === userId) {
        chatItem.message.push({
          id: chatItem.message[chatItem.message.length - 1].id + 1,
          is_from_me: true,
          text: newMessage,
          time: new Date(),
        });
      }
    });
  }
  renderMessage(userId);
});

let chats = document.querySelectorAll("li.get");
let nameBio = document.querySelector(".bio__name");
let bioTime = document.querySelector(".bio__time");
let bioName = document.querySelector(".namess");
let enterTime = document.querySelector(".enter");
let bioNumber = document.querySelector(".type");
let bioNickname = document.querySelector(".number");
chats.forEach(function (chat) {
  chat.addEventListener("click", function () {
    userId = chat.getAttribute("user_id");
    userId -= 0;
    let user = Data__usage.users[userId];
    nameBio.innerHTML = user.first_name + " " + user.last_name;
    bioTime.innerHTML = user.activity;
    bioName.innerHTML = user.first_name + " " + user.last_name;
    enterTime.innerHTML = user.activity;
    bioNumber.innerHTML = user.bio;
    bioNickname.innerHTML = user.user_name;
    renderMessage(userId);
  });
});

function renderMessage(userId) {
  let textArea = document.querySelector(".text__area");

  textArea.innerHTML = "";
  for (let link in Data__usage) {
    Data__usage[link].forEach((chatItem, index) => {
      if (index === userId) {
        chatItem.message.forEach((messages) => {
          textArea.innerHTML += `<li class=" ${
            messages.is_from_me ? "from__me" : "to__me"
          }">${messages.text}</li>`;
        });
      }
    });
  }
}
