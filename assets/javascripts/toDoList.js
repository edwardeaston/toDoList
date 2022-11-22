// Query Shorthand
let q = document.querySelector.bind(document);
let qa = document.querySelectorAll.bind(document);

// Scripts
window.addEventListener("load", () => {
  const form = q("#task-form");
  const input = q("#task-input");
  const list_el = q("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill out the task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    const task_text_el = document.createElement("p");
    task_text_el.classList.add("text");
    task_text_el.innerHTML = task;

    const task_remove_el = document.createElement("div");
    task_remove_el.classList.add("remove");

    const task_check_el = document.createElement("div");
    task_check_el.classList.add("check");

    const remove_button_el = document.createElement("button");
    remove_button_el.classList.add("remove-button");
    remove_button_el.innerHTML = `<i class="bi bi-x-square"></i>`;

    const check_button_el = document.createElement("button");
    check_button_el.classList.add("check-button");
    check_button_el.innerHTML = `<i class="bi bi-check-square"></i>`;

    task_remove_el.appendChild(remove_button_el);

    task_content_el.appendChild(task_text_el);

    task_check_el.appendChild(check_button_el);

    task_el.append(task_remove_el, task_content_el, task_check_el);

    list_el.appendChild(task_el);

    input.value = "";

    check_button_el.addEventListener("click", () => {
      task_text_el.classList.toggle("checked");
      console.log(task_text_el.outerHTML);
    });

    remove_button_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
