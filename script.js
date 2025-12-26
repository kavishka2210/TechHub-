// Fade in when page loads
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Fade out on link click
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // External links / empty links skip
    if (!href || href.startsWith("#") || href.startsWith("http")) return;

    e.preventDefault();
    document.body.classList.remove("loaded");

    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});


function closeUpdate() {
  document.querySelector(".update-bar").style.display = "none";
}

setTimeout(() => {
  const bar = document.querySelector(".update-bar");
  if (bar) bar.style.display = "none";
}, 5000);

<script>
async function sendData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const { error } = await supabase
    .from("users")
    .insert([{ name, email, score: 0 }]);

  if (error) {
    alert(error.message);
  } else {
    alert("Saved successfully!");
  }
}
</script>

