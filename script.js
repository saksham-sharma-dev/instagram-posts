/**
 * Function----
 * Code reusability
 * Divides code into small parts
 * Clean code
 * Every function will have it's own responsibility/logic
 */

const getAllPosts = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/albums/2/photos"
  );
  const jsonData = await data.json();
  console.log(jsonData);
  createInstaPosts(jsonData);
};

function createInstaPosts(postsData) {
  let instaContainerEle = document.getElementsByClassName("insta-container");

  for (let i = 0; i < postsData.length; i++) {
    let instaPostEle = document.createElement("div");
    instaPostEle.classList.add("insta-post");
    //create post user section
    let instaUserEle = createPostUserSection();
    instaPostEle.appendChild(instaUserEle);

    let instaPostImgEle = createPostImgSection(postsData[i].thumbnailUrl);
    instaPostEle.appendChild(instaPostImgEle);

    let instaPostIconEle = createInstaPostIcons();
    instaPostEle.appendChild(instaPostIconEle);

    let instaExtraEle = createInstaExtras(postsData[i].title);
    instaPostEle.appendChild(instaExtraEle);

    instaContainerEle[0].appendChild(instaPostEle);
  }
}

function createPostUserSection() {
  let instaUserEle = document.createElement("div");
  instaUserEle.classList.add("insta-user");

  let instaUserImgEle = document.createElement("img");
  instaUserImgEle.classList.add("user-image");
  instaUserImgEle.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
  );

  let instaUserDataEle = document.createElement("div");
  instaUserDataEle.classList.add("user-data");

  let userNameEle = document.createElement("p");
  userNameEle.classList.add("insta-bold");
  userNameEle.innerText = "Saksham";

  let userLocationEle = document.createElement("p");
  userLocationEle.innerText = "Jhansi-U.P.";
  instaUserEle.appendChild(instaUserImgEle);
  instaUserDataEle.appendChild(userNameEle);
  instaUserDataEle.appendChild(userLocationEle);
  instaUserEle.appendChild(instaUserDataEle);

  return instaUserEle;
}

function createPostImgSection(thumbnailUrl) {
  let instaPostImg = document.createElement("div");
  instaPostImg.classList.add("insta-post-image");
  let instaPostImgEle = document.createElement("img");
  instaPostImgEle.classList.add("insta-img-item");
  instaPostImgEle.setAttribute("src", thumbnailUrl);
  instaPostImg.appendChild(instaPostImgEle);
  return instaPostImg;
}

function createInstaPostIcons() {
  let instaPostIcon = document.createElement("div");
  instaPostIcon.classList.add("insta-post-icons");
  let heartEle = document.createElement("i");
  heartEle.classList.add("far", "fa-heart");
  heartEle.addEventListener("click", () => {
    if (heartEle.classList.contains("far")) {
      heartEle.classList.add("fas");
      heartEle.classList.remove("far");
      heartEle.classList.toggle("icon-like");
    } else {
      heartEle.classList.remove("fas");
      heartEle.classList.add("far");
      heartEle.classList.toggle("icon-like");
    }
  });
  let bookmarkEle = document.createElement("i");
  bookmarkEle.classList.add("far", "fa-bookmark");
  bookmarkEle.addEventListener("click", () => {
    if (bookmarkEle.classList.contains("far")) {
      bookmarkEle.classList.add("fas");
      bookmarkEle.classList.remove("far");
      bookmarkEle.classList.toggle("icon-save");
    } else {
      bookmarkEle.classList.remove("fas");
      bookmarkEle.classList.add("far");
      bookmarkEle.classList.toggle("icon-save");
    }
  });

  instaPostIcon.appendChild(heartEle);
  instaPostIcon.appendChild(bookmarkEle);
  return instaPostIcon;
}
function createInstaExtras(title) {
  let instaExtra = document.createElement("div");
  instaExtra.classList.add("insta-extras");
  let likesEle = document.createElement("p");
  likesEle.classList.add("insta-bold");
  likesEle.innerText = "2345 Likes";

  let captionEle = document.createElement("p");
  /* let captionSpanEle =  document.createElement("span");
  captionSpanEle.classList.add("insta-bold");
  captionSpanEle.innerText = "Saksham"; */

  captionEle.innerHTML = `<span class="insta-bold">Saksham</span> ${title}`;

  instaExtra.appendChild(likesEle);
  instaExtra.appendChild(captionEle);

  return instaExtra;
}

getAllPosts();
