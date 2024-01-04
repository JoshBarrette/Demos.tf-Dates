const targetNode = document.body;

function updateDates() {
    const td = document.querySelectorAll("td.date");

    console.log(td);

    td.forEach((d) => {
        const date = new Date(d.getAttribute("title"));
        d.textContent = date.toDateString() + ", " + date.toLocaleTimeString('en-US');
    });
}

const observer = new MutationObserver(updateDates);

const config = { childList: true, subtree: true };
observer.observe(targetNode, config);

updateDates();
