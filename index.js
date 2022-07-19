// Add your code here
//const formData = {
  //name: '',
  //email: ''
//}

//const configObj = {
  //method: 'POST',
  //headers: {
    //'Content-Type': 'application/json',
    //'Accept': 'application/json',
  //},
  //body: JSON.stringify(formData),
//}

  function submitData(name, email) {
    const formData = {
      name: `${name}`,
      email: `${email}`
    };
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    }
    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(obj => document.body.append(obj.id))
    .catch(function(error) {
      alert('Unauthorized Access');
      document.body.append(error.message)
    })
  }