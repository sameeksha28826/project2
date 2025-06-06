// 🔍 SEARCH FUNCTIONALITY
const inputBox = document.querySelector(".input-box");
const courses = document.querySelectorAll(".student_course1");

inputBox.addEventListener("input", () => {
  const searchValue = inputBox.value.toLowerCase();
  courses.forEach(course => {
    const courseTitle = course.textContent.toLowerCase();
    course.style.display = courseTitle.includes(searchValue) ? "flex" : "none";
  });
});

// 🎯 COURSE CARD CLICK HIGHLIGHT
courses.forEach(course => {
  course.addEventListener("click", () => {
    // Remove highlight from others
    courses.forEach(c => c.classList.remove("active"));
    // Highlight clicked
    course.classList.add("active");

    const courseName = course.innerText.trim();
    if (courseName) {
      alert(`You selected: ${courseName}`);
    } else {
      alert("This course has no title.");
    }
  });
});

// 🧹 OPTIONAL: REMOVE EMPTY COURSE BOXES (if h2 is empty)
courses.forEach(course => {
  const title = course.querySelector("h2");
  if (!title || !title.innerText.trim()) {
    course.style.display = "none";
  }
});
