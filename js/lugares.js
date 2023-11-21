		const description = document.querySelector(".tabela");

		document.querySelectorAll('path').forEach((el) =>
			el.addEventListener('mouseover', (event) => {
				event.target.className = ("enabled");
				description.classList.add("active");
				description.innerHTML = event.target.id;
			})

		);

		document.querySelectorAll('path').forEach((el) =>
			el.addEventListener("mouseout", () => {
				description.classList.remove("active");
			})
		);

		document.querySelector('path').forEach((el) =>
			el.addEventListener('click', (event) => {
			// event.target.className = ("enabled");
			// description.classList.add("active");
			// description.innerHTML = event.target.id;

			})
		);
		
	  

		document.onmousemove = function (e) {
			description.style.left = e.pageX + "px";
			description.style.top = (e.pageY - 70) + "px";
		}

