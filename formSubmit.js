
function handleFormSubmit(event) {
    event.preventDefault(); 
    
    const form = event.target; 
    const formData = new FormData(form);
    
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        education: formData.get("education"),
        career: formData.get("career"),
        course: formData.get("course"),
    };
    console.log(data);
 
    function dataClean() {
        form.reset(); 
    }

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;

    fetch('https://script.google.com/macros/s/AKfycbzBM5mN2SokLay_wpv4_QsnDmp4MW_jZ5eCi7TFsdV9Vgyulz_C5H4hhtHUPWAunpUS/exec', {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    })

    .then(response => {
        dataClean();  
        console.log(response);

        Swal.fire({
            icon: "success",
            title: "Form submitted successfully..",
            showConfirmButton: false,
            timer: 1500
        });
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: "error",
            title: "There was an error submitting the form!",
            showConfirmButton: false,
            timer: 1500
        });
    });
    

    // fetch('https://script.google.com/macros/s/AKfycbzyAFsOAMckLCBZKK_KuBxFrHdp6_BuCZWT5_CjkGfBVtZ3IAcyEj_m9ledWQqkQnSqAA/exec', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //      mode: 'no-cors'  // Add no-cors mode to bypass CORS restrictions
    // })
    // .then(response => {
    //     dataClean();  
    //     console.log(response);


    //     Swal.fire({
    //         icon: "success",
    //         title: "Form submitted successfully..",
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // })
    // .catch(error => {
    //     dataClean(); 
    //     Swal.fire({
    //         icon: "error",
    //         title: "There was an error submitting the form!",
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    //     console.error(error);
    // })
    // .finally(() => {
    //     submitButton.disabled = false; 
    // });
}




document.getElementById("reserveForm").addEventListener("submit", handleFormSubmit);
