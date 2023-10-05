// Attention fonction déppréciée
window.addEventListener("keydown", function (event) {
        let str ="KeyboardEvent: key='" + event.keyCode + "' | code='" + event.code + "'";
        let el = document.createElement("span");
        el.innerHTML = str + "<br/>";

        document.getElementById("output").appendChild(el);
        console.log(str)
    },
    true,
    );