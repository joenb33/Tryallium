const boxes = document.querySelectorAll(".box");
const changeStyleBtns = document.querySelectorAll(".change-style-btn");

boxes.forEach((box, index) => {
	const description = box.querySelector("p");
	const btn = changeStyleBtns[index];

	description.style.display = "none";

	btn.addEventListener("click", () => {
		if (description.style.display === "none") {
			description.style.display = "block";
		} else {
			description.style.display = "none";
			applyChanges(box, description);
		}
	});
});

function applyChanges(box, description) {
	const text = description.textContent;

	if (text.includes("background color to red")) {
		box.style.backgroundColor = "red";
	} else if (text.includes("text color to green")) {
		box.style.color = "green";
	} else if (text.includes("font family to Comic Sans MS")) {
		box.style.fontFamily = "Comic Sans MS";
	} else if (text.includes("all text bold")) {
		box.style.fontWeight = "bold";
	} else if (text.includes("Underline all links")) {
		const links = box.querySelectorAll("a");
		links.forEach((link) => (link.style.textDecoration = "underline"));
	} else if (text.includes("link color to purple")) {
		const links = box.querySelectorAll("a");
		links.forEach((link) => (link.style.color = "purple"));
	} else if (text.includes("heading font size to 24px")) {
		const headings = box.querySelectorAll("h2");
		headings.forEach((heading) => (heading.style.fontSize = "24px"));
	} else if (text.includes("body font size to 18px")) {
		box.style.fontSize = "18px";
	} else if (text.includes("background image to a beach scene")) {
		box.style.backgroundImage = "url(beach-scene.jpg)";
		box.style.backgroundSize = "cover";
	} else if (text.includes("border radius to 50px")) {
		box.style.borderRadius = "50px";
	}
}
