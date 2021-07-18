function saveData(){
    var name = document.getElementById('user')
    var roll = document.getElementById('roll')
    var key = firebase.database().ref('school').push().key;

    var students = {
        userName: name.value,
        rollNumber: roll.value,
        key: key
    }
    // console.log(students);

    firebase.database().ref('school/' + key).push(students);

    // console.log(key);
}

// function getData(){
//     firebase.database().ref('school').on('child_added',function(data){

//         console.log(data.val());

//     })
// }

// getData()

// function editData(){
//     firebase.database().ref('school/-MetIgHfX3Pz7yUYAY0-').set({
//         key: '-MetIgHfX3Pz7yUYAY0-',
//         rollNumber: '4455',
//         userName: 'Mariam' 

//     })
// }
// editData()

function removeData(){
    firebase.database().ref('school/-MetIdWHhRGN2lET5v1q').remove();
}

removeData()