function submit() {
    let checkedData = { answers: [] };
    let checked = document.querySelectorAll(".ck:checked");
    function checkCheck() {
        if ((document.querySelector(".ahn").checked) && (checked.length === 0)) {
            return checkedData = { answers: ["안창호"] };
        }
    };
    checkCheck();
    fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkedData)
    })
        .then(res => res.json())
        .then(ret => {
            ret ?
                document.getElementById("result").innerHTML = "정답입니다." :
                document.getElementById("result").innerHTML = "오답입니다.";
        })
};
