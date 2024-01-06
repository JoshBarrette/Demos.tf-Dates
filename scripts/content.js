const listBody = document.querySelector("tbody");

const config = { childList: true, subtree: true };
const observer = new MutationObserver(updateDates);

function updateDates() {
    observer.disconnect();

    const td = document.querySelectorAll("td.date");
    td.forEach((d) => {
        const date = new Date(d.getAttribute("title"));
        d.textContent = date.toDateString() + ", " + date.toLocaleTimeString('en-US');
    });

    observer.observe(listBody, config);
}

updateDates();
