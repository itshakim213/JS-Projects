document.querySelector(".click").onclick = function () {
    if (document.querySelector(".newitem input").value.length == 0) {
        alert("Please write something !!");
    } else {
        document.querySelector("#tag").innerHTML += `
        <div class="list">
            <span id="listname">
                ${document.querySelector(".newitem input").value}
            </span>
            <button class="delete">
                <i class='bx bx-message-square-x'></i>
            </button>
        </div>
        `;

        var current_list = document.querySelectorAll(".delete");
        for (var i = 0; i < current_list.length; i++) {
            current_list[i].onclick = function () {
                this.parentNode.remove();
            };
        }

        var lists = document.querySelectorAll(".list");
        for (var i = 0; i < lists.length; i++) {
            lists[i].onclick = function () {
                this.classList.toggle("comple");
            };
        }

        document.querySelector(".newitem input").value = "";
    }
};
