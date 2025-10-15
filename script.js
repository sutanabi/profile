async function fetchUser() {
  const container = document.getElementById("container");
  container.innerHTML = '<div class="loading">Memuat profil...</div>';

  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    container.innerHTML = `
      <div class="card">
        <img src="${user.picture.large}" alt="avatar" class="avatar" />
        <h2>${user.name.first} ${user.name.last}</h2>
        <p class="email">${user.email}</p>

        <div class="info">
          <p><strong>Gender:</strong> ${user.gender}</p>
          <p><strong>Age:</strong> ${user.dob.age}</p>
          <p><strong>Country:</strong> ${user.location.country}</p>
          <p><strong>City:</strong> ${user.location.city}</p>
        </div>

        <button onclick="fetchUser()">  Ganti Profil</button>
      </div>
    `;
  } catch (error) {
    container.innerHTML = `<div class="loading">Gagal memuat data 😢</div>`;
    console.error(error);
  }
}

fetchUser();
