const container = document.getElementById("container");

const createContent = (user) => {
    for (let index = 0; index < user.length; index++) {
        const element = user[index];
        // create elements
        const item = document.createElement("div");

        const title = document.createElement("p");
        const id = document.createElement("p");
        const box1 = document.createElement("div");
        const box2 = document.createElement("div");
        const button = document.createElement("button");
        const idDiv = document.createElement("div");

        const text = document.createElement("p");

        // give text
        id.textContent = `${element.id}. `;
        title.textContent = element.title;
        text.textContent = element.body;
        button.textContent = "Info";

        // add classes
        item.classList = "email-box";
        title.classList = "email";
        text.classList = "text";
        button.classList = "button";

        // appends
        container.appendChild(item);
        box1.appendChild(id);
        box1.appendChild(title);
        box2.appendChild(button);
        item.appendChild(idDiv);
        idDiv.appendChild(box1);
        idDiv.appendChild(box2);

        // event
        const textDiv = document.createElement("div");
        item.appendChild(textDiv);
        textDiv.appendChild(text);
        textDiv.classList.add("displayNone");

        button.addEventListener("click", () => {
            textDiv.classList.toggle("displayBlock");
        });
    }
};

ErrorFunction = () => {
    const error = document.createElement("p");
    error.textContent = "ERROR!";
    error.classList = "errorTitle";
    container.appendChild(error);
};

const Data = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.status === 404) {
            ErrorFunction();
        } else {
            const data = await response.json();
            createContent(data);
            console.log(data);
        }
    } catch (error) {
        console.log(error, "Something went wrong!");
    }
};
Data();
