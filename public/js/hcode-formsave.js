HTMLFormElement.prototype.save = function(config) {

    let form = this;

        form.addEventListener('submit', e => {

            e.preventDefault();
    
            let formData = new FormData(form);
    
            fetch(form.action, {
            method: form.method,
            body: formData
            })
            .then(response => response.json())
            .then(json => {
                if(json.error) {
                    
                } else {
                    if(typeof config)
                }
            }).catch(err => {

                reject(err);

            });
    
        });
    
}