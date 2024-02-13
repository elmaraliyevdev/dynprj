document.getElementById("form").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    let name = document.getElementById("first-name").value;
    let surname = document.getElementById("last-name").value;
    let tel = document.getElementById("phone-number").value;
    let email = document.getElementById("email-address").value;
    let message = document.getElementById("text-message").value;

    let data = {
        name: name,
        surname: surname,
        phone: tel,
        email: email,
        message: message
    };

    try {
        let response = await axios.post("http://localhost:3000/comment", data);
        form.reset()
        console.log("İstek başarıyla gönderildi!");
        console.log(response.data); 
    } catch (error) {
        console.error("İstek gönderilirken bir hata oluştu:", error);
    }
});
