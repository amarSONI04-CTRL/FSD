const apiBase = "http://localhost:5000/api/users";

const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

async function fetchUsers() {
  const res = await fetch(apiBase);
  const users = await res.json();
  userList.innerHTML = users.map(u => `
    <div class="user-card">
      <h3>${u.name}</h3>
      <p><b>Email:</b> ${u.email}</p>
      <p><b>Bio:</b> ${u.bio || "-"}</p>
      <p><b>Contact:</b> ${u.contact || "-"}</p>
      <button class="update" onclick="updateUser('${u._id}')">Update</button>
      <button onclick="deleteUser('${u._id}')">Delete</button>
    </div>
  `).join("");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newUser = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    bio: form.bio.value,
    contact: form.contact.value
  };
  await fetch(apiBase, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  });
  form.reset();
  fetchUsers();
});

async function deleteUser(id) {
  await fetch(`${apiBase}/${id}`, { method: "DELETE" });
  fetchUsers();
}

async function updateUser(id) {
  const bio = prompt("Enter new bio:");
  const contact = prompt("Enter new contact:");
  await fetch(`${apiBase}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bio, contact })
  });
  fetchUsers();
}

fetchUsers();
